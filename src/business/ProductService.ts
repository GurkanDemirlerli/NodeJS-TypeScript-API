import { IQueryModel, QueryModel } from './../models';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IProductService } from 'src/business';
import { IProduct } from '../models';
import { IProductRepository, ICategoryRepository } from '../repository';
import 'reflect-metadata';

@injectable()
export class ProductService implements IProductService {

    constructor(
        @inject(IOCTYPES.PRODUCT_REPOSITORY) private _productRepository: IProductRepository,
        @inject(IOCTYPES.CATEGORY_REPOSITORY) private _categoryRepository: ICategoryRepository
    ) { }

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

    async findProducts(query: IQueryModel): Promise<IProduct[]> {
        let queryModel = new QueryModel(query);
        let categoryId;
        let conditionQuery = {};
        let fieldsQuery = {};
        let optionsQuery = {};
        if (queryModel.category) {
           await this._categoryRepository.findOne({ "name": queryModel.category }, { '_id': 1 }, {}).then((res) => {
                categoryId = res._id;
            }).catch((error) => {
                //Unhandled error
            });
            conditionQuery = {
                'category': categoryId
            }
        }
        fieldsQuery = {
            // '_id': 1,
            // 'name': 1,
            // 'unitPrice': 1,
            // 'createdAt': 1
        }
        optionsQuery = {
            populate: {
                path: 'category',
                select: 'name -_id',
            },
            sort: {
                'createdAt': -1
            },
            skip: parseInt(queryModel.skip),
            limit: parseInt(queryModel.limit)
        }

        console.log(query.category);
        let p = new Promise<IProduct[]>((resolve, reject) => {
            this._productRepository.find(conditionQuery, fieldsQuery, optionsQuery).then((products: IProduct[]) => {
                resolve(<IProduct[]>products);
            }).catch((error) => {
                reject(error);
            });


        });
        return p;
    }

    listProducts(): Promise<IProduct[]> {
        let p = new Promise<IProduct[]>((resolve, reject) => {
            this._productRepository.retrieve().then((products: IProduct[]) => {
                resolve(<IProduct[]>products);
            }).catch((error) => {
                reject(error);
            });
        });
        return p;
    }
}