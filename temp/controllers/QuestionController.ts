import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { Authentication } from '../authentication';
import { IQuestionModel } from '../app/model/interfaces/IQuestionModel';
import { QuestionBusiness } from '../app/business/QuestionBusiness';
import { IQuestionBusiness } from '../app/business/interfaces/IQuestionBusiness';
import { IBaseController } from './interfaces/base/BaseController';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { injectable, inject, named } from 'inversify';
import 'reflect-metadata';

@injectable()
export class QuestionController implements IBaseController<QuestionBusiness> {

    constructor(
        @inject(IOCTYPES.QUESTION_BUSINESS) private _questionBusiness: IQuestionBusiness
    ) { }

    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var questionBusiness = new QuestionBusiness();
            questionBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            var user: IQuestionModel = <IQuestionModel>req.body;
            var _id: string = req.params._id;
            var questionBusiness = new QuestionBusiness();
            questionBusiness.update(_id, user, (error, result) => {
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
            var questionBusiness = new QuestionBusiness();
            questionBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

    create(req: express.Request, res: express.Response) {
        console.log('xxxxxxxx');
        try {
            Authentication.checkAuthentication(req)
                .then(isAuth => {
                    if (isAuth) {
                        var question: IQuestionModel = <IQuestionModel>req.body;
                        question.user = isAuth._id;
                        console.log(question);
                        // var questionBusiness = new QuestionBusiness();
                        this._questionBusiness.create(question, (error, result) => {
                            if (error) res.send({
                                "success": false,
                                "error": error
                            });
                            else {
                                return res.json({
                                    'success': true,
                                    'response': 'Question successfuly created'
                                });
                            }
                        });
                    }
                    else {
                        return res.json({
                            'success': false,
                            'error': 'Unauthorized'
                        });
                    }
                });

        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    retrieve(req: express.Request, res: express.Response): void {
        try {
            var questionBusiness = new QuestionBusiness();
            questionBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
}