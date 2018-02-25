import mongoose = require("mongoose");

export interface IUser extends mongoose.Document {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    address: string;
    city: string;
    region: string;
    country: string;
    phone: string;
    createdAt: Date;
    products: string[];
}