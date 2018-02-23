import { injectable } from 'inversify';
import CategorySchema = require("../dataAccess/schemas/category.schema");
import { ICategoryRepository } from './interfaces/ICategoryRepository';
import { RepositoryBase } from './RepositoryBase';
import { ICategory } from '../models/abstract/ICategory';
import 'reflect-metadata';

@injectable()
export class CategoryRepository extends RepositoryBase<ICategory> implements ICategoryRepository {
    constructor() {
        super(CategorySchema)
    }
}