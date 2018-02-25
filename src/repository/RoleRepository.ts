import { injectable } from 'inversify';
import RoleSchema = require("../dataAccess/schemas/role.schema");
import { IRoleRepository } from './';
import { RepositoryBase } from './RepositoryBase';
import { IRole } from '../models';
import 'reflect-metadata';

@injectable()
export class RoleRepository extends RepositoryBase<IRole> implements IRoleRepository {
    constructor() {
        super(RoleSchema)
    }
}