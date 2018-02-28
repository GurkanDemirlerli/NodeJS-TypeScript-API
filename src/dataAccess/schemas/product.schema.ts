import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { IProduct } from '../../models';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                required: true
            },
            unitPrice: {
                type: Number,
                required: true
            },
            unitsInStock: {
                type: Number,
                default: 0
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            picture: {
                type: String
            },
            description: {
                type: String,
                required: true
            },
            category: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
            likedBy: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
            }],
            dislikedBy: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
            }],
            comments: [{
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }]
        });
        return schema;
    }
}
var schema = mongooseConnection.model<IProduct>('Product', ProductSchema.schema);
export = schema;
