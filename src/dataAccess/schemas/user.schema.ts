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
                minlength: [5, 'first name > 5'],
                maxLength: [30, 'first name < 30']
            },
            lastName: {
                type: String,
                required: true,
                minlength: [5, 'last name > 5'],
                maxLength: [30, 'last name < 30'],
            },
            userName: {
                type: String,
                required: true,
                unique: true,
                lowercase: true
            },
            email: {
                type: String,
                required: true,
                unique: true,
                match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid Email']
            },
            password: {
                type: String,
                required: true
            },
            address: {
                type: String
            },
            city: {
                type: String
            },
            region: {
                type: String
            },
            country: {
                type: String
            },
            phone: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            products: [{
                type: Schema.Types.ObjectId,
                ref: 'Product'
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
