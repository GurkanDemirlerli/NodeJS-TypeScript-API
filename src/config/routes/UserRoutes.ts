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


 
        router.get("/users/getProfile/:_id", controller.getProfile);
        router.post('/login', controller.login);
        router.post("/users", controller.create);


        //Authorize
        router.use(Authentication.authenticatedRoute)
        router.get("/myProfile", controller.myProfile);


        //Authorize Admin
        //router.use(Authentication.adminRoute)
        router.get("/users/:_id", controller.findById);

        router.get("/users", controller.retrieve);
        router.delete("/users/:_id", controller.delete);
        router.put("/users/:_id", controller.update);
        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;