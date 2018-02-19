
import * as express from 'express';
import IBaseController = require("./interfaces/base/BaseController");
import * as jwt from 'jsonwebtoken';
import { Authentication } from '../authentication';
import { IQuestionModel } from '../app/model/interfaces/IQuestionModel';
import { QuestionBusiness } from '../app/business/QuestionBusiness';

class QuestionController {
    create(req: express.Request, res: express.Response): void {
        try {
            var question: IQuestionModel = <IQuestionModel>req.body;
            var questionBusiness = new QuestionBusiness();
            questionBusiness.create(question, (error, result) => {
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

export = QuestionController;    