import DataAccess = require('../Connection');
import { Schema } from 'mongoose';
import { IOrder } from '../../models';
const AddressSchema = require('./address.schema');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class OrderSchema {

    static get schema() {
        var schema = new Schema({
            owner: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            address: {//Bad design
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
                }
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            orderDetails: [{
                type: Schema.Types.ObjectId,
                ref: 'OrderDetails'
            }]

            //order status, contact informations, delivery time, virtual totalprice

        });
        return schema;
    }
}
var schema = mongooseConnection.model<IOrder>('Order', OrderSchema.schema);
export = schema;
