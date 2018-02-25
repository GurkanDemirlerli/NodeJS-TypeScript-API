import { injectable } from 'inversify';
import OrderDetailSchema = require("../dataAccess/schemas/orderDetail.schema");
import { IOrderDetailRepository } from './';
import { RepositoryBase } from './RepositoryBase';
import { IOrderDetail } from '../models';
import 'reflect-metadata';

@injectable()
export class OrderDetailRepository extends RepositoryBase<IOrderDetail> implements IOrderDetailRepository {
    constructor() {
        super(OrderDetailSchema)
    }
}