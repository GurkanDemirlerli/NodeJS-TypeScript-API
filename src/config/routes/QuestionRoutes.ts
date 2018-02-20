import * as express from 'express';
import { Authentication } from "../../authentication";
import { Container } from 'inversify';
import { IOCTYPES } from '../../ioc';
import { QuestionController } from '../../controllers/QuestionController';


export class QuestionRoutes {

    public static configureRoutes(container: Container) {
        const controller = container.get(QuestionController);
        var router = express.Router();
        router.post("/questions", controller.create);
        router.get("/questions", controller.retrieve);
        return router;

    }
}
    // _container: any;

    // constructor(container: Container) {
    //     this._container = container;
    // }
    // get routes(): express.Router {
    //     var router = express.Router();
    //     const controller = this._container.get(QuestionController);

    //     router.post("/questions", controller.create);
    //     router.get("/questions", controller.retrieve);
    //     return router;
    // }


    // public static configureRoutes(app: express.Express, container: Container): void {
    //     const questionController = container.get(QuestionController);


    // }
