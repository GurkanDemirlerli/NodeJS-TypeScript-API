import { IVehicleService } from './Ivehicle.service';
import { injectable, inject } from 'inversify';
const Vehicle = require('../models/Vehicle.model');
import 'reflect-metadata';


@injectable()
export class VehicleService implements IVehicleService {
    create(item: any, callback: (error: any, result: any) => void) {
        Vehicle.create(item, callback);

    }
    listAll(callback: (error: any, result: any) => void) {
        Vehicle.find({}, callback)
    }
}