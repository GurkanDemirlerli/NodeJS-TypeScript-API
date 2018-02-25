import mongoose = require("mongoose");

export interface IComment extends mongoose.Document {
    owner: string;
    product: string;
    content: string;
    createdAt: Date;
}