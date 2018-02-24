import { CategoriesController, ProductsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { IOCTYPES } from '../ioc';
import { Authentication } from '../testing';

export class ProductRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {
        const productsController = container.get(ProductsController);
        app.route('/api' + ProductsController.url)
            .post(Authentication.authenticatedRoute, (req, res, next) => productsController.addProduct(req, res, next))
            .get(Authentication.authenticatedRoute, (req, res, next) => productsController.findProducts(req, res, next));
    }
}