import { ISignupModel, ILoginModel, IUser } from '../../models';

export interface IUserService {
    signup: (item: ISignupModel) => Promise<IUser>;
    login: (item: ILoginModel) => Promise<any>;
}