import { UsersController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { AuthenticationService } from './../business/';

export class UserRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const usersController = container.get(UsersController);

        app.route('/api/users/signup')
            .post((req, res, next) => usersController.signup(req, res, next));

        app.route('/api/users/login')
            .post((req, res, next) => usersController.login(req, res, next));

        app.route('/api/users/address')
            .post(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.addAddress(req, res, next));

        app.route('/api/users/address/:_id')
            .patch(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.updateAddress(req, res, next));

        app.route('/api/users/address/:_id')
            .delete(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.deleteAddress(req, res, next));

        app.route('/api/users/address')
            .get(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.getAllMyAddresses(req, res, next));

        app.route('/api/users/address/:_id')
            .get(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.getMyAddress(req, res, next));

        app.route('/api/users/myprofile')
            .get(AuthenticationService.authenticatedRoute, (req, res, next) => usersController.getMyProfile(req, res, next));
    }
}