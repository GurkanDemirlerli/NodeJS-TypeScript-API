import { IRepositoryBase } from './IRepositoryBase';
import { IProduct } from '../../models';

export interface IProductRepository extends IRepositoryBase<IProduct> {
    // queryFind: (cond: any, fields: any, options: any, callback?: (err: any, res: any[]) => void)=> Promise<any>;
}