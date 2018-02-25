import mongoose = require("mongoose");

export interface IOrderDetail extends mongoose.Document {
    order: string;
    product: string;
    unitPrice: number;
    quantity: number;
}