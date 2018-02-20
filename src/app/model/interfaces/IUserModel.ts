import { IQuestionModel } from './IQuestionModel';
import mongoose = require("mongoose");

export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    questions:  string[];
    createdAt: Date;
}