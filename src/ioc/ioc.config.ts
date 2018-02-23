import { Container } from 'inversify';
import { IOCTYPES } from './ioc-types.enum';


//#region CONTROLLER IMPORTS
import { CategoriesController, ProductsController } from './../controllers';
//#endregion

//#region REPOSITORY IMPORTS
import { CategoryRepository, ProductRepository } from './../repository';
import { ICategoryRepository, IProductRepository } from './../repository';
//#endregion

//#region  CATEGORY IMPORTS
import { CategoryService, ProductService } from './../business';
import { ICategoryService, IProductService } from './../business';
//#endregion


export module IOC {
    export const container = new Container()

    export function configureContainer(): Container {

        //#region CONTROLLERS
        container
            .bind<CategoriesController>(CategoriesController)
            .toSelf()

        container
            .bind<ProductsController>(ProductsController)
            .toSelf()
        //#endregion

        //#region REPOSITORIES
        container
            .bind<ICategoryRepository>(IOCTYPES.CATEGORY_REPOSITORY)
            .to(CategoryRepository)

        container
            .bind<IProductRepository>(IOCTYPES.PRODUCT_REPOSITORY)
            .to(ProductRepository)

        //#endregion

        //#region SERVICES
        container
            .bind<ICategoryService>(IOCTYPES.CATEGORY_SERVICE)
            .to(CategoryService)

        container
            .bind<IProductService>(IOCTYPES.PRODUCT_SERVICE)
            .to(ProductService)
        //#endregion

        return container
    }

}