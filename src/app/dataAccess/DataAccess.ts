import Mongoose = require("mongoose");
import Constants = require("./../../config/constants/Constants");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("MongoDB connected.");
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        this.mongooseInstance.Promise = global.Promise;
        return this.mongooseInstance;
    }

}

DataAccess.connect();
export = DataAccess;
