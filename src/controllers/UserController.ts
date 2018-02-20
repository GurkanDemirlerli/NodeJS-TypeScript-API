
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import UserBusiness = require("./../app/business/UserBusiness");
import { Authentication } from '../authentication';
import { IUserModel } from '../app/model/interfaces/IUserModel';
import { IBaseController } from './interfaces/base/BaseController';
import { injectable, inject, named } from 'inversify';
import 'reflect-metadata';

@injectable()
class UserController implements IBaseController<UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var user: IUserModel = <IUserModel>req.body;
            var userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if (error) res.send({
                    "success": false,
                    "error": error
                });
                else res.send({
                    "success": true
                });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var user: IUserModel = <IUserModel>req.body;
            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.update(_id, user, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;

            var userBusiness = new UserBusiness();
            userBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

    getProfile(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.getProfile(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    myProfile(req: express.Request, res: express.Response): void {
        try {
            Authentication.checkAuthentication(req)
                .then(isAuth => {
                    console.log(isAuth);
                    if (isAuth) {
                        var userBusiness = new UserBusiness();
                        userBusiness.getProfile(isAuth._id, (error, user) => {
                            if (error) {
                                return res.json({
                                    'success': false,
                                    'error': error
                                });
                            } else {
                                return res.json({
                                    'success': true,
                                    'user': user
                                });
                            }
                        });
                    }
                });
        } catch (e) {
            console.log(e);
            return res.json({
                'success': false,
                'error': e
            });
        }
    }



    login(req: express.Request, res: express.Response): void {
        try {
            var username: string = req.body.username;
            var password: string = req.body.password;
            var userBusiness = new UserBusiness();
            userBusiness.login(username, password, (error, user) => {
                if (error) {
                    return res.json({
                        'success': false,
                        'error': error
                    })
                }
                else {
                    var token = jwt.sign({
                        _id: user._id,
                        username: user.username
                    }, 'My-Secret', {
                            expiresIn: 86400000//24 hours
                        }
                    );
                    return res.json({
                        'success': true,
                        'token': token
                    })
                }
            })

        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

}
export = UserController;    