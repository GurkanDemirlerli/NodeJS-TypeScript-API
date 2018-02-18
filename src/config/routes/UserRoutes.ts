import express = require("express");
import UserController = require("./../../controllers/UserController");
import { Authentication } from "../../authentication";

var router = express.Router();
class UserRoutes {
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }
    get routes(): express.Router {

        var controller = this._userController;

        router.post("/users", controller.create);
        router.put("/users/:_id", controller.update);
        router.get("/users/:_id", controller.findById);
        router.delete("/users/:_id", controller.delete);
        router.get("/users/getProfile/:_id", controller.getProfile);
        router.post('/users/login', controller.login);

        //Authorize
        router.use(Authentication.authenticatedRoute)
        router.get("/users", controller.retrieve);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;