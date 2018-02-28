import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { IUser } from '../../models';
// import { EmailValidators, UserNameValidators, PasswordValidators } from './Validators/UserValidator';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = new Schema({
            firstName: {
                type: String,
                required: true,
                minlength: 2,
                maxLength: 20
            },
            lastName: {
                type: String,
                required: true,
                minlength: 2,
                maxLength: 20
            },
            userName: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                match: /^[a-zA-Z0-9]+$/,
                minlength: 4,
                maxlength: 15
            },
            email: {
                type: String,
                required: true,
                unique: true,
                match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            password: {
                type: String,
                required: true,
                match: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            addresses: [{
                type: Schema.Types.ObjectId,
                ref: 'Address'
            }],
            orders: [{
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }],
            comments: [{
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }],
            likes: [{
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }],
            dislikes: [{
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }]
        });
        return schema;
    }


}
var schema = mongooseConnection.model<IUser>('User', UserSchema.schema);
export = schema;
