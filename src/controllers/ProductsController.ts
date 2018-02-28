import { IProductService } from '../business';
import {
    Request as req,
    Response as res,
    NextFunction as next
} from 'express';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import 'reflect-metadata';
import { IQueryModel } from 'src/models';


@injectable()
export class ProductsController {

    constructor( @inject(IOCTYPES.PRODUCT_SERVICE) private _productService: IProductService) { }

    addProduct(req, res, next) {
        this._productService.addProduct(req.body).then((product) => {
            res.send(product);
        }).catch((error) => {
            res.send(error);
        });
    }

    findProducts(req, res, next) {
        let query: IQueryModel = req.query;
        this._productService.findProducts(query).then((products) => {
            res.send(products);
        }).catch((error) => {
            res.send(error);
        });
    }
}