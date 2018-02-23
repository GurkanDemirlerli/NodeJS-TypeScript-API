// import DataAccess = require('../Connection');
// import { Schema } from 'mongoose';
// import { IUser } from '../../models/IUser';
// var mongoose = DataAccess.mongooseInstance;
// var mongooseConnection = DataAccess.mongooseConnection;

// class UserSchema {

//     static get schema() {
//         var schema = new Schema({
//             firstName: {
//                 type: String,
//                 required: true
//             },
//             lastName: {
//                 type: String,
//                 required: true
//             },
//             userName: {
//                 type: String,
//                 required: true
//             },
//             email: {
//                 type: String,
//                 required: true
//             },
//             address: {
//                 type: String,
//             },
//             city: {
//                 type: String
//             },
//             region: {
//                 type: String
//             },
//             country: {
//                 type: String
//             },
//             phone: {
//                 type: String
//             },
//             createdAt: {
//                 type: Date,
//                 default: Date.now()
//             },
//             supplies: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'Product'
//             }],
//             orders: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'Order'
//             }],
//             comments: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'Comment'
//             }],
//             likes: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'Product'
//             }],
//             dislikes: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'Product'
//             }]
//         });
//         return schema;
//     }
// }
// var schema = mongooseConnection.model<IUser>('User', UserSchema.schema);
// export = schema;
