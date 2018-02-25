import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { IComment } from '../../models';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CommentSchema {

    static get schema() {
        var schema = new Schema({
            owner: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            content: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        });
        return schema;
    }
}
var schema = mongooseConnection.model<IComment>('Comment', CommentSchema.schema);
export = schema;
