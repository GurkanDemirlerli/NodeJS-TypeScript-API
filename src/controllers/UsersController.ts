import { IUserService } from '../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { ISignupModel, ILoginModel, SignupModel } from './../models';
import 'reflect-metadata';
import { validate } from 'class-validator';


@injectable()
export class UsersController {

    constructor( @inject(IOCTYPES.USER_SERVICE) private _userService: IUserService) { }

    async signup(req, res, next) {
        let signupModel: SignupModel = new SignupModel(<ISignupModel>req.body)
        console.log('XXXXXXXX');
        await validate(signupModel).then((errors) => {
            console.log(errors);
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
        let loginModel: ILoginModel = <ILoginModel>req.body;
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

    // findProducts(req, res, next) {
    //     let query: IQueryModel = req.query;
    //     this._productService.findProducts(query).then((products) => {
    //         res.send(<IProductResource[]>products);
    //     }).catch((error) => {
    //         res.send(error);
    //     });
    // }
}