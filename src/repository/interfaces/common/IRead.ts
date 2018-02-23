import * as mongoose from 'mongoose';

export interface IRead<T extends mongoose.Document> {
    retrieve: (callback?: (error: any, result: T[]) => void) => Promise<T[]>;
    findById: (id: string, callback?: (error: any, result: T) => void) => Promise<T>;
    findOne: (cond: any, fields: any, options: any, callback?: (err: any, res: T) => void) => Promise<T>;
    find: (cond: any, fields: any, options: any, sortOptions?: any,
        callback?: (err: any, res: T[]) => void) => Promise<T[]>;
    count: (cond?: any) => Promise<number>;
}