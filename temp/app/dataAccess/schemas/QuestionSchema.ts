import { IQuestionModel } from '../../model/interfaces/IQuestionModel';
import { Schema } from 'mongoose';
import DataAccess = require("./../../dataAccess/DataAccess");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class QuestionSchema {

    static get schema() {
        var schema = new Schema({
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IQuestionModel>("Question", QuestionSchema.schema);
export = schema;
