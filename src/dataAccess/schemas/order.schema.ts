// import DataAccess = require('../Connection');
// import { Schema } from 'mongoose';
// import { IOrder } from '../../models/IOrder';
// var mongoose = DataAccess.mongooseInstance;
// var mongooseConnection = DataAccess.mongooseConnection;

// class OrderSchema {

//     static get schema() {
//         var schema = new Schema({
//             owner: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'User'
//             },
//             shipAdress: {
//                 type: String,
//                 required: true
//             },
//             shipCity: {
//                 type: String,
//                 required: true
//             },
//             shipRegion: {
//                 type: String,
//                 required: true
//             },
//             shipCountry: {
//                 type: String,
//                 required: true
//             },
//             orderDetails: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'OrderDetails'
//             }],
//             createdAt: {
//                 type: Date,
//                 default: Date.now()
//             },
//             //order status, contact informations, delivery time, virtual totalprice

//         });
//         return schema;
//     }
// }
// var schema = mongooseConnection.model<IOrder>('Order', OrderSchema.schema);
// export = schema;
