import { IProduct } from '../../models';

export interface IProductService {
    addProduct: (item: IProduct, callback?: (error: any, result: IProduct) => void) => Promise<IProduct>;
}