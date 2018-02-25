import { IUserService } from '../business';
import {
    Request as req,
    Response as res,
    NextFunction as next
} from 'express';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { ISignupModel, ILoginModel } from '../models';
import 'reflect-metadata';


@injectable()
export class UsersController {

    constructor( @inject(IOCTYPES.USER_SERVICE) private _userService: IUserService) { }

    signup(req, res, next) {
        let signupModel: ISignupModel = <ISignupModel>req.body;
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