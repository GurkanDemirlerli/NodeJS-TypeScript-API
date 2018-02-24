import { ICategoryService } from './';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { ICategory } from '../models';
import { ICategoryRepository } from '../repository';
import 'reflect-metadata';

@injectable()
export class CategoryService implements ICategoryService {

    constructor( @inject(IOCTYPES.CATEGORY_REPOSITORY) private _categoryRepository: ICategoryRepository) {

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