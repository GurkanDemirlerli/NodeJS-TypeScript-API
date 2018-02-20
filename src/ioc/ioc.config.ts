import { Container } from 'inversify';
import { IOCTYPES } from './ioc-types.enum';
import { IQuestionBusiness } from '../app/business/interfaces/IQuestionBusiness';
import { QuestionBusiness } from '../app/business/QuestionBusiness';
import { QuestionController } from '../controllers/QuestionController';


export module IOC {
    export const container = new Container();

    export function configureContainer(): Container {
        container
            .bind<QuestionController>(QuestionController)
            .toSelf();

        container
            .bind<IQuestionBusiness>(IOCTYPES.QUESTION_BUSINESS)
            .to(QuestionBusiness)
            .inSingletonScope();

        return container;
    }
}