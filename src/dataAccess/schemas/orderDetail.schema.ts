// import DataAccess = require('../Connection');
// import { Schema } from 'mongoose';
// import { IOrderDetail } from '../../models/IOrderDetail';
// var mongoose = DataAccess.mongooseInstance;
// var mongooseConnection = DataAccess.mongooseConnection;

// class OrderDetailSchema {

//     static get schema() {
//         var schema = new Schema({
//             order: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Order'
//             },
//             product: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Product'
//             },
//             unitPrice: {//figure out how to use money instead of number
//                 type: Number,
//                 required: true
//             },
//             quantity: {
//                 type: Number,
//                 required: true
//             }//add discount field
//         });
//         return schema;
//     }
// }
// var schema = mongooseConnection.model<IOrderDetail>('OrderDetail', OrderDetailSchema.schema);
// export = schema;
