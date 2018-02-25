import mongoose = require("mongoose");

export interface IRole extends mongoose.Document {
    name: string;
    users: string[];
}