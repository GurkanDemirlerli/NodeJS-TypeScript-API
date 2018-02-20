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
        this._vehicleRepository.create(req.body, (error, result) => {
            if (error) res.send({ "error": "error" });
            else res.send(result);
        });
    }

    listAll(req, res, next) {
        this._vehicleRepository.retrieve((error, result) => {
            if (error) res.send({ "error": "error" });
            else res.send(result);
        });
    }
}