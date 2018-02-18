import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./base/RepositoryBase");

class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }

    getProfile(_id: any, callback: (error: any, result: any) => void) {
        UserSchema.findById({ _id }, callback).select(['firstName', 'lastName', '-_id']);
    }

    getByUserName(username: any, callback: (error: any, result: any) => void) {
        UserSchema.findOne({ 'username': username }, callback);
    }


}

Object.seal(UserRepository);
export = UserRepository;