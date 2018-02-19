import { QuestionRepository } from './../repository/QuestionRepository';
import UserRepository = require('./../repository/UserRepository');
import { IQuestionBusiness } from './interfaces/IQuestionBusiness';
import { IQuestionModel } from './../model/interfaces/IQuestionModel';

export class QuestionBusiness implements IQuestionBusiness {
    private _questionRepository: QuestionRepository;
    private _userRepository: UserRepository;

    constructor() {
        this._questionRepository = new QuestionRepository();
        this._userRepository = new UserRepository();
    }
    retrieve(callback: (error: any, result: IQuestionModel) => void) {
        this._questionRepository.retrieve(callback);
    }

    findById: (_id: string, callback: (error: any, result: IQuestionModel) => void) => void;
    create(item: IQuestionModel, callback: (error: any, result: any) => void) {
        this._questionRepository.create(item, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                console.log(res);
                if (res) {
                    console.log(res);
                    this._userRepository.pushQuestion(item.user, res._id, callback);
                }
            }
        });
    }
    update: (_id: string, item: IQuestionModel, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}