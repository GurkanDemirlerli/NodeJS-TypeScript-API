import { injectable } from 'inversify';
import CommentSchema = require("../dataAccess/schemas/comment.schema");
import { ICommentRepository } from './';
import { RepositoryBase } from './RepositoryBase';
import { IComment } from '../models';
import 'reflect-metadata';

@injectable()
export class CommentRepository extends RepositoryBase<IComment> implements ICommentRepository {
    constructor() {
        super(CommentSchema)
    }
}