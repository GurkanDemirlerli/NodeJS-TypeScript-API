import { CommentsController } from './../controllers';
import * as express from 'express';
import { Container } from 'inversify';

export class CommentRoutes {
    public static configureRoutes(app: express.Express, container: Container): void {

        const commentsController = container.get(CommentsController);

    }
}