import { injectable, unmanaged } from 'inversify';
import mongoose = require("mongoose");
import { ModelFindOneAndUpdateOptions } from 'mongoose';
import 'reflect-metadata';
import { IRepositoryBase } from './interfaces/IRepositoryBase';

@injectable()

export abstract class RepositoryBase<T extends mongoose.Document> implements IRepositoryBase<T> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor( @unmanaged() schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    // getName(): string {
    //     return 'Base';
    // }


    create(item: any, callback?: (error: any, result: T) => void): Promise<T> {
        let self = this;
        let p = new Promise<T>((resolve, reject) => {
            self._model.create(item, (err, res) => {
                if (callback) {
                    callback(err, <T>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>res);
                }
            });
        });

        return p;
    }
    retrieve(callback: (error: any, result: T[]) => void): Promise<T[]> {
        let self = this;
        let p = new Promise<T[]>((resolve, reject) => {
            self._model.find({}, (err, res) => {
                if (callback) {
                    callback(err, <T[]>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T[]>res);
                }
            });
        });

        return p;
    }

    findById(id: string, callback?: (error: any, result: T) => void): Promise<T> {
        let self = this;
        let p = new Promise<T>((resolve, reject) => {
            self._model.findById(id, (err, res) => {
                if (callback) {
                    callback(err, <T>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>res);
                }
            });
        });

        return p;
    }

    findOne(cond: any, fields: any, options: any, callback?: (err: any, res: T) => void): Promise<T> {
        let self = this;
        let p = new Promise<T>((resolve, reject) => {
            self._model.findOne(cond, fields, options).exec((err, res) => {
                if (callback) {
                    callback(err, <T>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>res);
                }
            });
        });

        return p;
    }

    find(cond: any, fields: any, options: any, sortOptions?: any, callback?: (err: any, res: T[]) => void): Promise<T[]> {
        let p = new Promise<T[]>((resolve, reject) => {
            let query = this._model.find(cond, fields, options);
            if (sortOptions) {
                query = query.sort(sortOptions);
            }

            query.exec((err, res) => {
                if (callback) {
                    callback(err, <T[]>res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T[]>res);
                }
            });
        });

        return p;
    }

    count(cond?: any): Promise<number> {
        let self = this;
        let p = new Promise<number>((resolve, reject) => {
            self._model.count(cond, (err, count) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(count);
                }
            });
        });

        return p;
    }

    save(item: T, callback?: (error: any, result: T) => void): Promise<T> {
        let p = new Promise<T>((resolve, reject) => {
            item.save((err, result) => {
                if (callback) {
                    callback(err, <T>result);
                }

                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>result);
                }
            });
            resolve(null);
        });

        return p;
    }

    upsert(cond: any, item: any, callback?: (error: any, result: T) => void): Promise<T> {
        let self = this;
        let p = new Promise<T>((resolve, reject) => {
            let options: mongoose.ModelFindOneAndUpdateOptions = {
                upsert: true
            };
            self._model.findOneAndUpdate(cond, item, options, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>result);
                }
            });
        });

        return p;
    }

    findByIdAndPush(_id: string, item: any, callback?: (error: any, result: T) => void): Promise<T> {
        let self = this;
        let p = new Promise<T>((resolve, reject) => {
            let options: mongoose.ModelFindOneAndUpdateOptions = {
                'new': true
            };
            self._model.findByIdAndUpdate(_id, { $push: item }, options, (err, result) => {
                console.log(item);
                if (err) {
                    reject(err);
                }
                else {
                    resolve(<T>result);
                }
            });
        });

        return p;
    }

    delete(_id: string, callback?: (error: any) => void): Promise<boolean> {
        let self = this;
        let p = new Promise<boolean>((resolve, reject) => {
            self._model.remove({ _id: this.toObjectId(_id) }, (err) => {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });

        return p;
    }

    deleteAll(callback?: (error: any) => void): Promise<boolean> {
        let self = this;
        let p = new Promise<boolean>((resolve, reject) => {
            self._model.remove({}, (err) => {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });

        return p;
    }

    toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}