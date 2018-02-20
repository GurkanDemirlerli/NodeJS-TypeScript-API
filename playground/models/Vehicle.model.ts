import DataAccess =require('../dataAccess/Connection');
import { Schema } from 'mongoose';
import { IVehicle } from './IVehicle';
// import DataAccess = require("./../../dataAccess/DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class VehicleSchema {

    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                required: true
            },
            mod: {
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
var schema = mongooseConnection.model<IVehicle>('Vehicle', VehicleSchema.schema);
export = schema;
