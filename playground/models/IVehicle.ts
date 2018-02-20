import mongoose = require("mongoose");

export interface IVehicle extends mongoose.Document {
    name: string;
    mod: string;
    createdAt: Date;
}
