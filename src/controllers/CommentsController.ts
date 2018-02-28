import { AuthenticationService, ICommentService } from './../business';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../ioc/ioc-types.enum';
import 'reflect-metadata';
import { IComment } from './../models';

@injectable()
export class CommentsController {

    constructor( @inject(IOCTYPES.COMMENT_SERVICE) private _commentService: ICommentService) {

    }

    async addComment(req, res, next) {
        let user;
        let comment: IComment;

        await AuthenticationService.checkAuthentication(req).then(isAuth => {
            if (isAuth) {
                user = isAuth._id;
            } else {
                res.json({
                    'success': false,
                    'error': 'UnAuthorized'
                });
            }
        }).catch((error) => {
            res.json({
                'success': false,
                'error': error
            });
        });

        comment = req.body;
        comment.owner = user;

        this._commentService.addComment(comment).then((resComment) => {
            res.json({
                'success': true,
                'data': resComment
            });
        }).catch((error) => {
            res.json({
                'success': false,
                'error': error
            });
        });

    }
}