import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IProductService } from 'src/business';
import { IProduct } from '../models';
import { IProductRepository } from '../repository';
import 'reflect-metadata';
import { IProductResource } from '../models';

@injectable()
export class ProductService implements IProductService {

    constructor( @inject(IOCTYPES.PRODUCT_REPOSITORY) private _productRepository: IProductRepository) {

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

    getAllProducts(): Promise<IProductResource[]> {
        let p = new Promise<IProductResource[]>((resolve, reject) => {
            this._productRepository.find(
                {
                    // 'quantityPerUnit': {
                    //     $in: [3, 125]
                    // }
                }, {
                    'name': 1,
                    '_id': 0,
                    'unitPrice': 1
                },
                {
                    // select: 'name',
                    populate: {
                        path: 'category'
                    },
                    sort: {
                        'unitPrice': -1
                    },
                    skip: 5,
                    limit: 3
                }).then((products: IProductResource[]) => {
                    resolve(<IProductResource[]>products);
                }).catch((error) => {
                    reject(error);
                });
        });
        return p;
    }

    listProducts(): Promise<IProductResource[]> {
        let p = new Promise<IProductResource[]>((resolve, reject) => {
            this._productRepository.retrieve().then((products: IProduct[]) => {
                resolve(<IProductResource[]>products);
            }).catch((error) => {
                reject(error);
            });
        });
        return p;
    }
}