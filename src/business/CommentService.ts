import { ICommentService } from './../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from './../ioc';
import { IComment } from './../models';
import { IProductRepository, ICommentRepository, IUserRepository } from './../repository';
import 'reflect-metadata';

@injectable()
export class CommentService implements ICommentService {


    constructor(
        @inject(IOCTYPES.COMMENT_REPOSITORY) private _commentRepository: ICommentRepository,
        @inject(IOCTYPES.PRODUCT_REPOSITORY) private _productRepository: IProductRepository,
        @inject(IOCTYPES.USER_REPOSITORY) private _userRepository: IUserRepository
    ) { }

    addComment(item: IComment): Promise<any> {
        let p = new Promise<IComment>((resolve, reject) => {
            this._commentRepository.create(item).then((res) => {
                if (res) {
                    this._userRepository.findByIdAndPush(res.owner, { 'comments': res._id }).then((userRes) => {
                        if (userRes) {
                            this._productRepository.findByIdAndPush(res.product, { 'comments': res._id }).then((productRes) => {
                                if (productRes) {
                                    resolve(res);
                                } else {
                                    //delete created comment and pull from user
                                    reject('Error when creating the comment.2')
                                }
                                resolve(res);
                            }).catch((error) => {

                            });
                        } else {
                            //delete created comment
                            reject('Error when creating the comment.1')
                        }
                    }).catch((error) => {
                        //delete created comment
                        reject(error);
                    });
                } else {
                    reject('Comment create failed');
                }
            }).catch((error) => {
                reject(error);
            });
        });
        return p;

    }
}

// SAMPLE SERVICE FUNCTION
// function(item: IEntity): Promise<any> {
//     let p = new Promise<IEntity>((resolve, reject) => {
//         this._myRepository.create(item).then((res) => {
//             if(res){
//                 resolve(res);
//             }else {
//                 reject('HATA');
//             }
//         }).catch((error) => {

//         });
//     });
//     return p;

// }
