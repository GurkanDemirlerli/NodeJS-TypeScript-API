import DataAccess = require("./../../dataAccess/DataAccess");
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = new mongoose.Schema({
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("User", UserSchema.schema);
export = schema;
