import { IUserModel } from '../model/interfaces/IUserModel';
import UserModel = require("./../model/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./base/RepositoryBase");

export class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }

    getProfile(_id: any, callback: (error: any, result: any) => void) {
        UserSchema.findById({ _id }, callback).select(['firstName', 'lastName', '-_id']);
    }

    getByUserName(username: any, callback: (error: any, result: any) => void) {
        UserSchema.findOne({ 'username': username }, callback);
    }

    pushQuestion(_id: any, questionId: any, callback: (error: any, result: any) => void) {
        UserSchema.findById({ _id }, (err, user) => {
            if (err) {
                callback(err, null);
            } else {
                if (!user) {
                    callback('Kullanıcı bulunamadı', null);
                } else {
                    console.log('mkfkfkfkfkfkfkfkf');
                    console.log(questionId);
                    // user.update({ '_id': _id },$push: {questions})
                    UserSchema.findByIdAndUpdate(_id, {
                        $push: { 'questions': questionId }
                    }, { 'new': true }, callback);
                }
            }
        });
    }


}