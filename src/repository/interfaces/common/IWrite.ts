import * as mongoose from 'mongoose';

export interface IWrite<T extends mongoose.Document> {
    create: (item: any, callback?: (error: any, result: T) => void) => Promise<T>;
    save: (item: T, callback?: (error: any, result: T) => void) => Promise<T>;
    upsert: (cond: any, item: T, callback?: (error: any, result: T) => void) => Promise<T>;
    findByIdAndPush: (_id: string, item: any, callback?: (error: any, result: T) => void) => Promise<T>;
    delete: (_id: string, callback?: (error: any) => void) => Promise<boolean>;
    deleteAll: (callback?: (error: any) => void) => Promise<boolean>;
}