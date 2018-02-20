import { RepositoryBase } from './base/RepositoryBase';
import { IVehicle } from '../models/IVehicle';
import { injectable } from 'inversify';
import VehicleSchema = require("../models/Vehicle.model")
import 'reflect-metadata';


@injectable()
export class VehicleRepository extends RepositoryBase<IVehicle>{
    constructor() {
        super(VehicleSchema)
    }
}