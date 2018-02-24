import mongoose = require("mongoose");

export interface IOrder extends mongoose.Document {
    owner: string,
    shipAddress: string,
    shipCity: string,
    shipRegion: string,
    shipCountry: string,
    orderDetails: string,
    createdAt: Date
}