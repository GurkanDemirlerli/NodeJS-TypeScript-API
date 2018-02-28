import { IQueryModel } from './../abstract/IQueryModel'

export class QueryModel implements IQueryModel {
    limit: string = "3";
    skip: string = "0";
    //if category not specified, mongoose must return all categories. Look productService for how to used.
    category?: string;

    constructor(query: IQueryModel) {
        if (query.limit)
            this.limit = query.limit;
        if (query.skip)
            this.skip = query.skip;
        if (query.category)
            this.category = query.category;
    }
}
