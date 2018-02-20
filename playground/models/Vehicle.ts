import { IVehicle } from './IVehicle';
import mongoose = require('mongoose');

export class Vehicle {
    private _vehicle: IVehicle;

    constructor(vehicle: IVehicle) {
        this._vehicle = vehicle;
    }
    get name(): string {
        return this._vehicle.name;
    }
    get mod(): string {
        return this._vehicle.mod;
    }
    get createdAt(): Date {
        return this._vehicle.createdAt;
    }
}