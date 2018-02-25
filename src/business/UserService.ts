import { ISignupModel, ILoginModel, IUser } from './../models';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IUserService } from 'src/business';
import { IUserRepository } from '../repository';
import 'reflect-metadata';
import { AuthenticationService } from './';
import * as jwt from 'jsonwebtoken';


@injectable()
export class UserService implements IUserService {

    constructor( @inject(IOCTYPES.USER_REPOSITORY) private _userRepository: IUserRepository) {

    }
    signup(item: ISignupModel): Promise<IUser> {
        let p = new Promise<IUser>((resolve, reject) => {
            this._userRepository.create(item).then((res: IUser) => {
                resolve(<IUser>res);
            }).catch((error) => {
                reject(error.message);
            });
        });
        return p;
    }

    login(item: ILoginModel): Promise<any> {
        let p = new Promise<IUser>((resolve, reject) => {
            this._userRepository.findOne({ 'userName': item.userName, 'password': item.password }, {}, {}).then((res: IUser) => {
                if (res) {
                    var token = jwt.sign({ _id: res._id, userName: res.userName }, 'MySecret', { expiresIn: 86400000 });
                    resolve(token);
                } else {
                    reject('Wrong username or password');
                }
            }).catch((error) => {
                reject(error)
            });
        });
        return p;
    }
}