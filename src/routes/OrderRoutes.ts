import { OrdersController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';

export class OrderRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const ordersController = container.get(OrdersController);

    }
}