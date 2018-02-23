import { ICategory } from '../../models/abstract/ICategory';

export interface ICategoryService {
    addCategory: (item: ICategory, callback?: (error:any, result: ICategory)=>void)=> Promise<ICategory>;
}