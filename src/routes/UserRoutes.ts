import { UsersController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';

export class UserRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const usersController = container.get(UsersController);

        app.route('/api/users/signup')
            .post((req, res, next) => usersController.signup(req, res, next));
        app.route('/api/users/login')
            .post((req, res, next) => usersController.login(req, res, next));
    }
}