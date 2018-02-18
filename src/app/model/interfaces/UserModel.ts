import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

export = UserModel;