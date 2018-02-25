import { injectable } from 'inversify';
import UserSchema = require("../dataAccess/schemas/user.schema");
import { IUserRepository } from './interfaces/IUserRepository';
import { RepositoryBase } from './RepositoryBase';
import { IUser } from '../models';
import 'reflect-metadata';

@injectable()
export class UserRepository extends RepositoryBase<IUser> implements IUserRepository {
    constructor() {
        super(UserSchema)
    }
}