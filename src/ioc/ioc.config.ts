import { CategoryRepository } from './../repository/CategoryRepository';
import { Container } from 'inversify'
import { IOCTYPES } from './ioc-types.enum'
import { ICategoryRepository } from '../repository/interfaces/ICategoryRepository';
import { ICategoryService } from '../business/interfaces/ICategoryService';
import { CategoryService } from '../business/CategoryService';
import { CategoriesController } from '../controllers/CategoriesController';

export module IOC {
    export const container = new Container()

    export function configureContainer(): Container {

        //================== controllers =====================
        container
            .bind<CategoriesController>(CategoriesController)
            .toSelf()

        //================== repositories ===================
        container
            .bind<ICategoryRepository>(IOCTYPES.CATEGORY_REPOSITORY)
            .to(CategoryRepository)

        //================== services ========================
        container
            .bind<ICategoryService>(IOCTYPES.CATEGORY_SERVICE)
            .to(CategoryService)
        // .inSingletonScope()

        return container
    }

}