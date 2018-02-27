import mongoose = require("mongoose");
export interface IOrder extends mongoose.Document {
    owner: string;
    address: {
        receiverFirstName: string;
        receiverLastName: string;
        content: string;
        city: string;
        region: string;
        country: string;
        phone: string;
    }
    orderDetails: string;
    createdAt: Date;
}