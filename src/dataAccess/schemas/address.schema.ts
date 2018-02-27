import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { IAddress } from '../../models';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
//==================================================ADD VALIDATION=========================
class AddressSchema {

    static get schema() {
        var schema = new Schema({
            title: {
                type: String,
                required: true
            },
            receiverFirstName: {
                type: String,
                required: true
            },
            receiverLastName: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            region: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true,
                match: /^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))$/ //May be not true regex
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        });
        return schema;
    }


}
var schema = mongooseConnection.model<IAddress>('Address', AddressSchema.schema);
export = schema;
