import { injectable, unmanaged } from 'inversify';
import mongoose = require("mongoose");
import 'reflect-metadata';

@injectable()
export class RepositoryBase<T extends mongoose.Document> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor( @unmanaged() schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }



    create(item: T, callback?: (error: any, result: T) => void): Promise<T> {
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
        // this._model.create(item, callback);

    }

    retrieve(callback?: (error: any, result: T[]) => void): Promise<T[]> {
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

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);

    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));

    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }


    toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}