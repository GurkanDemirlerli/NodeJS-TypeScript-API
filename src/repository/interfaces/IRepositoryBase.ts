import * as mongoose from 'mongoose';
import { IRead } from './common/IRead';
import { IWrite } from './common/IWrite';

export interface IRepositoryBase<T extends mongoose.Document> extends IRead<T>, IWrite<T> {
}