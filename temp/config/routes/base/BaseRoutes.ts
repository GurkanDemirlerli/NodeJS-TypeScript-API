import { Container } from 'inversify';
import { QuestionRoutes } from '../QuestionRoutes';
import express = require("express");
import UserRoutes = require("./../UserRoutes");
// var app = express();
export class BaseRoutes {

    public static configureBaseRoutes(app: express.Express, container: Container): void {
        app.use("/", QuestionRoutes.configureRoutes(container));
        // app.use("/", new UserRoutes().routes);
    }


    // get routes() {
    //     app.use("/", new QuestionRoutes().routes);
    //     app.use("/", new UserRoutes().routes);

    //     return app;
    // }
}
// export = BaseRoutes;