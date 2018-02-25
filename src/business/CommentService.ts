import { ICommentService } from './';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/';
import { IComment } from '../models';
import { ICommentRepository } from '../repository';
import 'reflect-metadata';

@injectable()
export class CommentService implements ICommentService {

    constructor( @inject(IOCTYPES.COMMENT_REPOSITORY) private _commentRepository: ICommentRepository) {

    }
}