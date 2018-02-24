import { CategoriesController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { IOCTYPES } from '../ioc';
import { Authentication } from '../testing';

export class CategoryRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {
        const categoriesController = container.get(CategoriesController);
        app.route('/api/categories')
            .post((req, res, next) => categoriesController.addCategory(req, res, next));
    }
}