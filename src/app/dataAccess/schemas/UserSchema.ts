import { IUserModel } from '../../model/interfaces/IUserModel';
import { Schema } from 'mongoose';
import DataAccess = require("./../../dataAccess/DataAccess");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = new Schema({
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            questions: [{
                type: Schema.Types.ObjectId,
                ref: 'Question'
            }]
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("User", UserSchema.schema);
export = schema;
