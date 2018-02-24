import { IProduct, IProductResource } from '../../models';

export interface IProductService {
    addProduct: (item: IProduct, callback?: (error: any, result: IProduct) => void) => Promise<IProduct>;
    listProducts: () => Promise<IProductResource[]>;
    getAllProducts: () => Promise<IProductResource[]>;
}