import { CommentRoutes } from './CommentRoutes';
import { OrderRoutes } from './OrderRoutes';
import { ProductRoutes } from './ProductRoutes';
import { CategoryRoutes } from './CategoryRoutes';
import { UserRoutes } from './UserRoutes';
import * as express from 'express';
import { Container } from 'inversify';

export class RouteBinder {
    public static configureRoutes(app: express.Express, container: Container): void {
        CategoryRoutes.configureRoutes(app, container);
        ProductRoutes.configureRoutes(app, container);
        UserRoutes.configureRoutes(app, container);
        OrderRoutes.configureRoutes(app, container);
        CommentRoutes.configureRoutes(app, container);
    }
}