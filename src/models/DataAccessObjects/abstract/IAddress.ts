import mongoose = require("mongoose");

export interface IAddress extends mongoose.Document {
    title: string;
    receiverFirstName: string;
    receiverLastName: string;
    content: string;
    city: string;
    region: string;
    country: string;
    phone: string;
    //#region relational
    user: string;
    //#endregion
}