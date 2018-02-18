import IUserModel = require("./interfaces/UserModel");

class UserModel {
    private _userModel: IUserModel;

    constructor(user: IUserModel) {
        this._userModel = user;
    }
    get firstName(): string {
        return this._userModel.firstName;
    }
    get lastName(): string {
        return this._userModel.lastName;
    }
    get username(): string {
        return this._userModel.username;
    }
    get password(): string {
        return this._userModel.password;
    }
}

Object.seal(UserModel);
export = UserModel;