import mongoose = require("mongoose");

export interface IProduct extends mongoose.Document {
    name: string;
    unitPrice: number;// make this money
    unitsInStock: number;
    createdAt: Date;
    description: string;
    likedBy: string[];
    dislikedBy: string[];
    comments: string[];
    picture?: string;
    category: string;
    supplier: string;
}