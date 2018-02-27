import { ILoginModel } from './../../'

export class LoginModel implements ILoginModel {
    userName: string;
    password: string;

    constructor(_loginModel: ILoginModel) {
        this.userName = _loginModel.userName;
        this.password = _loginModel.password;
    }
}