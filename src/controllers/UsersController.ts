import { IUserService } from '../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { ISignupModel, SignupModel, ILoginModel, LoginModel, CreateAddressModel, ICreateAddressModel, IAddress } from './../models';
import 'reflect-metadata';
import { validate } from 'class-validator';
import { AuthenticationService } from '../business/';


@injectable()
export class UsersController {

    constructor( @inject(IOCTYPES.USER_SERVICE) private _userService: IUserService) { }

    async signup(req, res, next) {
        let signupModel: SignupModel = new SignupModel(<ISignupModel>req.body)
        await validate(signupModel).then((errors) => {
            //#region TEMP Compare
            if (signupModel.password !== signupModel.passwordVerify) {
                res.json({
                    'success': false,
                    'error': 'Password and Verify not match'
                });
            }
            //#endregion
            if (errors.length > 0) {
                res.json({
                    'success': false,
                    'data': errors
                });
            }
        }).catch((error) => {
            res.json({
                'success': false,
                'error': 'Unknown error'
            });
        });
        this._userService.signup(signupModel).then((data) => {
            res.json({
                'success': true,
                'data': data
            });
        }).catch((error) => {
            res.json({
                'success': false,
                'error': error
            });
        });
    }

    login(req, res, next) {
        let loginModel: LoginModel = new LoginModel(<ILoginModel>req.body)
        this._userService.login(loginModel).then((data) => {
            res.json({
                'success': true,
                'data': data
            });
        }).catch((error) => {
            res.json({
                'success': false,
                'error': error
            });
        });
    }

    addAddress(req, res, next) {
        try {
            AuthenticationService.checkAuthentication(req)
                .then(isAuth => {
                    if (isAuth) {
                        let createAddressModel: CreateAddressModel = new CreateAddressModel(<ICreateAddressModel>req.body);
                        createAddressModel.user = isAuth._id;
                        this._userService.addAddress(createAddressModel).then((data) => {
                            res.json({
                                'success': true,
                                'data': data
                            });
                        }).catch((error) => {
                            res.json({
                                'success': false,
                                'error': error
                            });
                        });
                    }
                })
        } catch (error) {
            res.json({
                'success': false,
                'error': 'Unhandled error'
            });
        }
    }

    updateAddress(req, res, next) {
        try {
            AuthenticationService.checkAuthentication(req)
                .then(isAuth => {
                    if (isAuth) {
                        const address: IAddress = <IAddress>req.body;
                        address.user = isAuth._id;
                        this._userService.updateAddress(req.params._id, <IAddress>req.body).then((data) => {
                            res.json({
                                'success': true,
                                'data': data
                            });
                        }).catch((error) => {
                            res.json({
                                'success': false,
                                'error': error
                            });
                        });
                    }
                })
        } catch (error) {
            res.json({
                'success': false,
                'error': 'Unhandled error'
            });
        }
    }
}