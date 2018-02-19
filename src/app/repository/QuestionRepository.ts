import { QuestionModel } from './../model/QuestionModel';
import { IQuestionModel } from './../model/interfaces/IQuestionModel';
import QuestionSchema = require("./../dataAccess/schemas/QuestionSchema");
import RepositoryBase = require("./base/RepositoryBase");

export class QuestionRepository extends RepositoryBase<IQuestionModel>{
    constructor() {
        super(QuestionSchema)
    }
}

// Object.seal(QuestionRepository);