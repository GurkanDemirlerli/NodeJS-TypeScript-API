import express = require("express");
import bodyParser = require("body-parser");
import logger = require("morgan");

import MethodOverride = require("./../MethodOverride");
import { IOC } from "../../../ioc";
import { BaseRoutes } from '../../routes/base/BaseRoutes';


class MiddlewaresBase {

    static get configuration() {
        var app = express();
        app.use(bodyParser.json());
        app.use(logger('dev'));
        app.use(MethodOverride.configuration());
        const container = IOC.configureContainer();
        BaseRoutes.configureBaseRoutes(app, container);

        // app.use(new BaseRoutes().routes);

        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;