import { ICommentService } from '../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import 'reflect-metadata';

@injectable()
export class CommentsController {

    constructor( @inject(IOCTYPES.COMMENT_SERVICE) private _commentService: ICommentService) {

    }
}