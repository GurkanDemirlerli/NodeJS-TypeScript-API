import { IOrderService } from '../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import 'reflect-metadata';

@injectable()
export class OrdersController {

    constructor( @inject(IOCTYPES.ORDER_SERVICE) private _orderService: IOrderService) {

    }
}