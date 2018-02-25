import { ProductsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
export class ProductRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const productsController = container.get(ProductsController);

        app.route('/api/products')
            .post((req, res, next) => productsController.addProduct(req, res, next))
            .get((req, res, next) => productsController.findProducts(req, res, next));
    }
}