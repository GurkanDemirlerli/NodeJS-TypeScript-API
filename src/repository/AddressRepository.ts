import { injectable } from 'inversify';
import AddressSchema = require("../dataAccess/schemas/address.schema");
import { IAddressRepository } from './';
import { RepositoryBase } from './RepositoryBase';
import { IAddress } from '../models';
import 'reflect-metadata';

@injectable()
export class AddressRepository extends RepositoryBase<IAddress> implements IAddressRepository {
    constructor() {
        super(AddressSchema)
    }
}