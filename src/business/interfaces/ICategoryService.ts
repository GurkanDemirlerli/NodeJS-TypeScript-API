import { ICategory } from '../../models';

export interface ICategoryService {
    addCategory: (item: ICategory, callback?: (error:any, result: ICategory)=>void)=> Promise<ICategory>;
}