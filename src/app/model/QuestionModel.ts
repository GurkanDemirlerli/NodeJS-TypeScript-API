import { IUserModel } from './interfaces/IUserModel';
import { IQuestionModel } from './interfaces/IQuestionModel';
import mongoose = require('mongoose');

export class QuestionModel {

    private _questionModel: IQuestionModel;

    constructor(question: IQuestionModel) {
        this._questionModel = question;
    }

    get title(): string {
        return this._questionModel.title;
    }

    get content(): string {
        return this._questionModel.content;
    }

    get user(): string {
        return this._questionModel.user;
    }

}

Object.seal(QuestionModel);