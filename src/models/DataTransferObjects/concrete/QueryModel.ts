import { IQueryModel } from './../abstract/IQueryModel'

export class QueryModel implements IQueryModel {
    limit: string = "3";
    skip: string = "0";

    constructor(query: IQueryModel) {
        if (query.limit)
            this.limit = query.limit;
        if (query.skip)
            this.skip = query.skip;
    }
}

