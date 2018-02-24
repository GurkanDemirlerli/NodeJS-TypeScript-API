import { IQueryModel, QueryModel } from './../models';
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

    findProducts(query: IQueryModel): Promise<IProductResource[]> {
        var queryModel = new QueryModel(query);
        console.log(queryModel.limit);
        let p = new Promise<IProductResource[]>((resolve, reject) => {
            this._productRepository.find(
                {
                    // 'unitPrice': {
                    //     $in: [5, 125]
                    // }
                }, {
                    '_id': 1,
                    'name': 1,
                    'unitPrice': 1,
                    'createdAt': 1
                },
                {
                    populate: {
                        path: 'category',
                        select: 'name -_id'
                    },
                    sort: {
                        'createdAt': -1
                    },
                    skip: parseInt(queryModel.skip),
                    limit: parseInt(queryModel.limit)
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