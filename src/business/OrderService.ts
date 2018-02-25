import { IOrderService } from './';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc';
import { IOrder } from '../models';
import { IOrderRepository } from '../repository';
import 'reflect-metadata';

@injectable()
export class OrderService implements IOrderService {

    constructor( @inject(IOCTYPES.ORDER_REPOSITORY) private _orderRepository: IOrderRepository) {

    }

}