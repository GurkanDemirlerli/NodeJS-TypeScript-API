import mongoose = require("mongoose");

export interface ICategory extends mongoose.Document {
    name: string;
    description: string;
}