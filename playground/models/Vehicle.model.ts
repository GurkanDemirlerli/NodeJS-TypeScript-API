// import { IUserModel } from '../../model/interfaces/IUserModel';
// import DataAccess = require("./../../dataAccess/DataAccess");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

class VehicleSchema {

    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                required: true
            },
            model: {
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
module.exports = mongoose.model('Vehicle', VehicleSchema.schema);
