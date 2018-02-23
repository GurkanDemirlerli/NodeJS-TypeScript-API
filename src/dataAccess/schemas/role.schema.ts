// import DataAccess = require('../Connection');
// import { Schema } from 'mongoose';
// import { IRole } from '../../models/IRole';
// var mongoose = DataAccess.mongooseInstance;
// var mongooseConnection = DataAccess.mongooseConnection;

// class RoleSchema {

//     static get schema() {
//         var schema = new Schema({
//             name: {
//                 type: String,
//                 required: true
//             },
//             users: [{
//                 type: Schema.Types.ObjectId,
//                 ref: 'User'
//             }]//users'in icine createdAt eklenecek
//         });
//         return schema;
//     }
// }
// var schema = mongooseConnection.model<IRole>('Role', RoleSchema.schema);
// export = schema;
