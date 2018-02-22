import { IVehicleService } from './Ivehicle.service';
import { injectable, inject } from 'inversify';
const Vehicle = require('../models/Vehicle.model');
import 'reflect-metadata';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { VehicleRepository } from '../dataAccess/VehicleRepository';


@injectable()
export class VehicleService implements IVehicleService {
    constructor( @inject(IOCTYPES.VEHICLE_REPOSITORY) private _vehicleRepository: VehicleRepository) {

    }

    create(item: any, callback: (error: any, result: any) => void) {
        this._vehicleRepository.create(item, callback);

    }
    listAll(callback: (error: any, result: any) => void) {
        this._vehicleRepository.retrieve(callback);
    }
}