import { IProductRepository } from './';
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
    // //For Aggregate. This is not good for design, change it later.
    // queryFind(cond: any, fields: any, options: any, callback?: (err: any, res: any[]) => void): Promise<any> {
    //     let p = new Promise<any[]>((resolve, reject) => {
    //         // let query = ProductSchema.aggregate([
    //         //     { "$unwind": "$category" },
    //         //     {
    //         //         "$lookup": {
    //         //             "from": "category",
    //         //             "localField": "category",
    //         //             "foreignField": "_id",
    //         //             "as": "resultingTagsArray"
    //         //         }
    //         //     },
    //         //     {
    //         //         "$unwind": "$resultingTagsArray"
    //         //     },
    //         //     {
    //         //         "$group": {
    //         //             "_id": null,
    //         //             "allCategories": { "$addToSet": "$resultingTagsArray" },
    //         //             "count": { "$sum": 1 }
    //         //         }
    //         //     }
    //         // ]);


    //         let query = ProductSchema.aggregate([
    //             {
    //                 $lookup: {
    //                     from: "categories",
    //                     localField: "category",
    //                     foreignField: "_id",
    //                     as: "category"
    //                 }
    //             },
    //             {
    //                 $match: {
    //                     "category.name": "Elektronik"
    //                 }
    //             },
    //             {
    //                 $project: {
    //                     "category": {
    //                         $arrayElemAt: ["$category", 0]
    //                     }
    //                 }
    //             }
    //         ]);

    //         // let query = ProductSchema.aggregate([
    //         //     {
    //         //         $unwind: "$category"
    //         //     }
    //         // ])


    //         // let query2 = ProductSchema.find(cond, fields, options);

    //         query.exec((err, res) => {
    //             console.log(res);
    //             if (callback) {
    //                 callback(err, <any[]>res);

    //             }
    //             if (err) {
    //                 reject(err);
    //             }
    //             else {
    //                 resolve(<any[]>res);
    //             }
    //         });
    //     });

    //     return p;
    // }
}