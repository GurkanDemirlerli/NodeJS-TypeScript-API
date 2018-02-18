
import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import IUserModel = require("./../app/model/interfaces/UserModel");

import * as jwt from 'jsonwebtoken';



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