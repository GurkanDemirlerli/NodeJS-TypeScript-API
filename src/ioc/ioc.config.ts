import { Container } from 'inversify';
import { IOCTYPES } from './ioc-types.enum';


//#region CONTROLLER IMPORTS
import { CategoriesController, ProductsController, UsersController } from './../controllers';
//#endregion

//#region REPOSITORY IMPORTS
import { CategoryRepository, ProductRepository, UserRepository } from './../repository';
import { ICategoryRepository, IProductRepository, IUserRepository } from './../repository';
//#endregion

//#region  CATEGORY IMPORTS
import { CategoryService, ProductService, UserService } from './../business';
import { ICategoryService, IProductService, IUserService } from './../business';
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

        container
            .bind<UsersController>(UsersController)
            .toSelf()
        //#endregion

        //#region REPOSITORIES
        container
            .bind<ICategoryRepository>(IOCTYPES.CATEGORY_REPOSITORY)
            .to(CategoryRepository)

        container
            .bind<IProductRepository>(IOCTYPES.PRODUCT_REPOSITORY)
            .to(ProductRepository)

        container
            .bind<IUserRepository>(IOCTYPES.USER_REPOSITORY)
            .to(UserRepository)

        //#endregion

        //#region SERVICES
        container
            .bind<ICategoryService>(IOCTYPES.CATEGORY_SERVICE)
            .to(CategoryService)

        container
            .bind<IProductService>(IOCTYPES.PRODUCT_SERVICE)
            .to(ProductService)

        container
            .bind<IUserService>(IOCTYPES.USER_SERVICE)
            .to(UserService)
        //#endregion

        return container
    }

}