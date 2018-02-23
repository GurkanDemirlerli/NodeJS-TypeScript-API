import { CategoriesController, ProductsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { IOCTYPES } from '../ioc';

export class RouteBinder {
    public static configureRoutes(app: express.Express, container: Container): void {
        const categoriesController = container.get(CategoriesController)
        const productsController = container.get(ProductsController);

        app.route('/api' + CategoriesController.url)
            .post((req, res, next) => categoriesController.addCategory(req, res, next));

        app.route('/api' + ProductsController.url)
            .post((req, res, next) => productsController.addProduct(req, res, next));
    }
}