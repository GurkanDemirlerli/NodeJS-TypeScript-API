import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IProductService } from 'src/business/interfaces/IProductService';
import { ProductRepository } from '../repository/ProductRepository';
import { IProduct } from '../models';


@injectable()
export class ProductService implements IProductService {

    constructor( @inject(IOCTYPES.PRODUCT_REPOSITORY) private _productRepository: ProductRepository) {

    }
    addProduct(item: IProduct, callback?: (error: any, result: IProduct) => void): Promise<IProduct> {
        let p = new Promise<IProduct>((resolve, reject) => {
            this._productRepository.create(item, (err, res) => {
                if (callback) {
                    callback(err, <IProduct>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<IProduct>res);
                }
            });
        });
        return p;
    }
}