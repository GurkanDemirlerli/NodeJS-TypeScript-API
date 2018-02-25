import { injectable } from 'inversify';
import OrderSchema = require("../dataAccess/schemas/order.schema");
import { IOrderRepository } from './';
import { RepositoryBase } from './RepositoryBase';
import { IOrder } from '../models';
import 'reflect-metadata';

@injectable()
export class OrderRepository extends RepositoryBase<IOrder> implements IOrderRepository {
    constructor() {
        super(OrderSchema)
    }
}