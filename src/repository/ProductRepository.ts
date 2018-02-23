import { IProductRepository } from './interfaces/IProductRepository';
import { injectable } from 'inversify';
import ProductSchema = require("../dataAccess/schemas/product.schema");
import { RepositoryBase } from './RepositoryBase';
import 'reflect-metadata';
import { IProduct } from '../models';

@injectable()
export class ProductRepository extends RepositoryBase<IProduct> implements IProductRepository {
    constructor() {
        super(ProductSchema)
    }
}