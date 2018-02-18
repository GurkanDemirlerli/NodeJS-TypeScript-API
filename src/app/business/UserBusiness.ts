import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");

class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    create(item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.getByUserName(item.username, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                console.log(res);
                if (res) {
                    callback('Bu username kullanılıyor', null);
                } else {
                    console.log('Kayıt olunabilir');
                    this._userRepository.create(item, callback);
                }
            }
        });
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update(_id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);
            else
                this._userRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._userRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

    getProfile(_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.getProfile(_id, callback);
    }

    login(username: string, password: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.getByUserName(username, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                if (!res) {
                    callback('Wrong user name', null);
                } else {
                    console.log(password);
                    if (password === res.password) {
                        callback(null, res);
                    } else {
                        callback('Wrong password', null);
                    }
                }
            }
        });
    }
}
Object.seal(UserBusiness);
export = UserBusiness;