import { CommentsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';
import { AuthenticationService } from './../business';

export class CommentRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const commentsController = container.get(CommentsController);

        app.route('/api/comments')
        .post(AuthenticationService.authenticatedRoute, (req, res, next) => commentsController.addComment(req, res, next));

    }
}