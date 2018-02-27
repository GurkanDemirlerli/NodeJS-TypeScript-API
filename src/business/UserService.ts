import { ISignupModel, ILoginModel, IUser, CreateAddressModel, IAddress } from './../models';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import { IUserService } from 'src/business';
import { IUserRepository, IAddressRepository } from '../repository';
import 'reflect-metadata';
import { AuthenticationService } from './';
import * as jwt from 'jsonwebtoken';

@injectable()
export class UserService implements IUserService {


    constructor(
        @inject(IOCTYPES.USER_REPOSITORY) private _userRepository: IUserRepository,
        @inject(IOCTYPES.ADDRESS_REPOSITORY) private _addressRepository: IAddressRepository
    ) { }
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
    //provide token cant be in here, change it later
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

    addAddress(item: CreateAddressModel): Promise<any> {
        let p = new Promise<IAddress>((resolve, reject) => {
            this._addressRepository.create(item).then((res: IAddress) => {
                this._userRepository.findByIdAndPush(res.user, { 'addresses': res._id }).then((userRes) => {
                    //make something optional
                }).catch((error) => {
                    //delete created  address
                    reject(error.message);
                });
                resolve(<IAddress>res);
            }).catch((error) => {
                reject(error.message);
            });
        });
        return p;
    }

    updateAddress(_id: string, item: IAddress): Promise<any> {
        let p = new Promise<IAddress>((resolve, reject) => {
            this._addressRepository.findById(_id).then((address) => {
                console.log(item.user);
                console.log(address.user);
                if (item.user === address.user.toString()) {

                    this._addressRepository.upsert(item._id, item).then((res: IAddress) => {
                        if (res) {
                            resolve(<IAddress>res);
                        } else {
                            reject('Address not found');
                        }
                    }).catch((error) => {
                        reject(error.message);
                    });
                } else {
                    reject('UnAuthorized, This is not your address');
                }
            }).catch((error) => {
                reject(error.message);
            });

        });
        return p;
    }

    deleteAddress(_id: string, user: string): Promise<any> {
        let p = new Promise<any>((resolve, reject) => {
            this._addressRepository.findById(_id).then((address) => {
                if (user === address.user.toString()) {
                    this._addressRepository.delete(_id).then((res) => {
                        if (res) {
                            resolve('Address Successfuly deleted');
                        } else {
                            reject('Address not found');
                        }
                    }).catch((error) => {
                        reject(error.message);
                    });
                } else {
                    reject('UnAuthorized, This is not your address');
                }
            }).catch((error) => {
                reject(error.message);
            });
        });
        return p;
    }
    //Change it, it cant be return user password vs vs
    getMyProfile(_id: string): Promise<IUser> {
        let p = new Promise<any>((resolve, reject) => {
            this._userRepository.findById(_id).then((user) => {
                if (user) {
                    resolve(<IUser>user);
                } else {
                    reject('User Not Found');
                }
            }).catch((error) => {
                reject(error.message);
            });
        });
        return p;
    }
}