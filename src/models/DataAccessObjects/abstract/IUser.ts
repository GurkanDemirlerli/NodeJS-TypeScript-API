import mongoose = require("mongoose");

export interface IUser extends mongoose.Document {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    addresses: string[];
    createdAt: Date;
    products: string[];
}