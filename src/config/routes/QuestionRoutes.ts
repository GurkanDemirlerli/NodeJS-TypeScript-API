import * as express from 'express';
import QuestionController = require("./../../controllers/QuestionController");
import { Authentication } from "../../authentication";

var router = express.Router();
class QuestionRoutes {
    private _questionController: QuestionController;

    constructor() {
        this._questionController = new QuestionController();
    }

    get routes(): express.Router {

        var controller = this._questionController;

        router.post("/questions", controller.create);
        router.get("/questions", controller.retrieve)
        return router;
    }
}

export = QuestionRoutes;
