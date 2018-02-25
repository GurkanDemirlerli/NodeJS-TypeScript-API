import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { ICategory } from '../../models';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CategorySchema {

    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
            ,
            products: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        });
        return schema;
    }
}
var schema = mongooseConnection.model<ICategory>('Category', CategorySchema.schema);
export = schema;
