import { ICategoryService } from './interfaces/ICategoryService';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { CategoryRepository } from '../repository/CategoryRepository';
import { ICategory } from '../models/abstract/ICategory';


@injectable()
export class CategoryService implements ICategoryService {

    constructor( @inject(IOCTYPES.CATEGORY_REPOSITORY) private _categoryRepository: CategoryRepository) {

    }
    addCategory(item: ICategory, callback?: (error: any, result: ICategory) => void): Promise<ICategory> {
        let p = new Promise<ICategory>((resolve, reject) => {
            this._categoryRepository.create(item, (err, res) => {
                if (callback) {
                    callback(err, <ICategory>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<ICategory>res);
                }
            });
        });
        return p;
    }
}