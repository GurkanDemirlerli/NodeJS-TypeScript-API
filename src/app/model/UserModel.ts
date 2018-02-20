import { IQuestionModel } from './interfaces/IQuestionModel';
import { IUserModel } from './interfaces/IUserModel';
import mongoose = require('mongoose');

export class UserModel {
    private _userModel: IUserModel;

    constructor(user: IUserModel) {
        this._userModel = user;
    }
    get firstName(): string {
        return this._userModel.firstName;
    }
    get lastName(): string {
        return this._userModel.lastName;
    }
    get username(): string {
        return this._userModel.username;
    }
    get password(): string {
        return this._userModel.password;
    }
    get questions(): string[] {
        return this._userModel.questions;
    }
    get createdAt():Date{
        return this._userModel.createdAt;
    }
}

Object.seal(UserModel);