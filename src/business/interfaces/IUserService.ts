import { ISignupModel, ILoginModel, IUser, CreateAddressModel, IAddress } from '../../models';

export interface IUserService {
    signup: (item: ISignupModel) => Promise<IUser>;
    login: (item: ILoginModel) => Promise<any>;
    addAddress: (item: CreateAddressModel) => Promise<any>;
    updateAddress: (_id: string, item: IAddress) => Promise<any>;
    deleteAddress: (_id: string, user: string) => Promise<any>;
    getMyProfile: (_id: string) => Promise<any>;
    getAllMyAddresses: (user: string) => Promise<any>;
    getMyAddress: (_id: string, user: string) => Promise<any>;
}