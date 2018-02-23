import { CategoryService } from './../business/CategoryService';
import {
    Request as req,
    Response as res,
    NextFunction as next
} from 'express';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { ICategoryService } from '../business/interfaces/ICategoryService';
import 'reflect-metadata';

@injectable()
export class CategoriesController {
    public static url = '/categories';

    constructor( @inject(IOCTYPES.CATEGORY_SERVICE) private _categoryService: CategoryService) {

    }
    addCategory(req, res, next) {
        this._categoryService.addCategory(req.body).then((category) => {
            res.send(category);
        }).catch((error) => {
            res.send(error);
        });
    }
}