import { ProductRoutes } from './ProductRoutes';
import { CategoryRoutes } from './CategoryRoutes';
import { UserRoutes } from './UserRoutes';
import { CategoriesController, ProductsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { IOCTYPES } from '../ioc';
import { Authentication } from '../testing';

export class RouteBinder {
    public static configureRoutes(app: express.Express, container: Container): void {
        CategoryRoutes.configureRoutes(app, container);
        ProductRoutes.configureRoutes(app, container);
        UserRoutes.configureRoutes(app, container);
    }
}