import mongoose = require("mongoose");

export interface IProduct extends mongoose.Document {
    name: string;
    quantityPerUnit: number;
    unitPrice: number;// make this money
    unitsInStock: number;
    createdAt: Date;
    description: string;
    category: string;
    supplier: string;
    likedBy: string[];
    dislikedBy: string[];
    comments: string[];
    picture?: string;
}