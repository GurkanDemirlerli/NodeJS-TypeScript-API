import * as express from 'express';
import { Container } from 'inversify';

import { VehiclesController } from '../controllers';
import { IOCTYPES } from '../ioc';

export class RouteBinder
{
	public static configureRoutes(app: express.Express, container: Container): void
	{
        const vehiclesController = container.get(VehiclesController)

        app.route(VehiclesController.url)
            .post((req, res, next) => vehiclesController.add(req, res, next))
            .get((req, res, next) => vehiclesController.listAll(req, res, next))
    }
}