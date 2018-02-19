import express = require("express");
import UserRoutes = require("./../UserRoutes");
import QuestionRoutes = require("./../QuestionRoutes");

var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new QuestionRoutes().routes);
        app.use("/", new UserRoutes().routes);

        return app;
    }
}
export = BaseRoutes;