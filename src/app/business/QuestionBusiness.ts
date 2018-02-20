import { QuestionRepository } from './../repository/QuestionRepository';
import { IQuestionBusiness } from './interfaces/IQuestionBusiness';
import { IQuestionModel } from './../model/interfaces/IQuestionModel';
import { UserRepository } from '../repository/UserRepository';
import { injectable, inject, named } from 'inversify';
import 'reflect-metadata';

// @injectable()
// export class QuestionBusiness implements IQuestionBusiness {
//     private _questionRepository: QuestionRepository;
//     private _userRepository: UserRepository;

//     constructor() {
//         this._questionRepository = new QuestionRepository();
//         this._userRepository = new UserRepository();
//     }
//     retrieve(callback: (error: any, result: IQuestionModel) => void) {
//         this._questionRepository.retrieve(callback);
//     }

//     findById: (_id: string, callback: (error: any, result: IQuestionModel) => void) => void;
//     create(item: IQuestionModel, callback: (error: any, result: any) => void) {
//         console.log('1111111111111111111111111111111111111111')
//         this._questionRepository.create(item, (err, res) => {
//             if (err) {
//                 callback(err, res);
//             } else {
//                 console.log('2222222222222222222222222222222');
//                 if (res) {
//                     console.log('3333333333333333333333333333');
//                     this._userRepository.pushQuestion(item.user, res._id, callback);
//                 }
//             }
//         });
//     }
//     update: (_id: string, item: IQuestionModel, callback: (error: any, result: any) => void) => void;
//     delete: (_id: string, callback: (error: any, result: any) => void) => void;

// }
@injectable()
export class QuestionBusiness implements IQuestionBusiness {
    retrieve: (callback: (error: any, result: IQuestionModel) => void) => void;
    findById: (_id: string, callback: (error: any, result: IQuestionModel) => void) => void;
    create: (item: IQuestionModel, callback: (error: any, result: any) => void) => void;
    update: (_id: string, item: IQuestionModel, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}