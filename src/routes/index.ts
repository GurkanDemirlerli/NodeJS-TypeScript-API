import { CategoriesController } from './../controllers/CategoriesController';
import * as express from 'express';
import { Container } from 'inversify';
import { IOCTYPES } from '../ioc';

export class RouteBinder {
    public static configureRoutes(app: express.Express, container: Container): void {
        const categoriesController = container.get(CategoriesController)

        app.route(CategoriesController.url)
            .post((req, res, next) => categoriesController.addCategory(req, res, next));
    }
}