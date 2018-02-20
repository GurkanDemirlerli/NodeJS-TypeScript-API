import mongoose = require("mongoose");
import { IUserModel } from "./IUserModel";

export interface IQuestionModel extends mongoose.Document {
    title: string;
    content: string;
    user: string;
}
