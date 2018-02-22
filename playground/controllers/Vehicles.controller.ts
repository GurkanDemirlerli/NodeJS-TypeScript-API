import { VehicleRepository } from './../dataAccess/VehicleRepository';
import {
    Request as req,
    Response as res,
    NextFunction as next
} from 'express';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IVehicleService } from 'playground/services/Ivehicle.service';
import 'reflect-metadata';


@injectable()
export class VehiclesController {
    public static url = '/vehicles';

    constructor( @inject(IOCTYPES.VEHICLE_REPOSITORY) private _vehicleRepository: VehicleRepository) {

    }

    add(req, res, next) {
        this._vehicleRepository.create(req.body).then((vehicle) => {
            res.send(vehicle);
        }).catch((error) => {
            res.send(error);
        });
    }

    listAll(req, res, next) {
        this._vehicleRepository.retrieve().then((vehicles) => {
            res.send(vehicles);
        }).catch((error) => {
            res.send(error);
        });

    }
}