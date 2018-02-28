import { IComment } from '../../models';

export interface ICommentService {
    addComment: (item: IComment) => Promise<any>;
}