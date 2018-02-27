import { Container } from 'inversify';
import { IOCTYPES } from './ioc-types.enum';

//#region IMPORTS
//#region CONTROLLER IMPORTS
import {
    CategoriesController,
    ProductsController,
    UsersController,
    OrdersController,
    CommentsController
} from './../controllers';
//#endregion

//#region REPOSITORY IMPORTS
import {
    CategoryRepository,
    ProductRepository,
    UserRepository,
    OrderRepository,
    OrderDetailRepository,
    RoleRepository,
    CommentRepository,
    AddressRepository
} from './../repository';
import {
    ICategoryRepository,
    IProductRepository,
    IUserRepository,
    IOrderRepository,
    IOrderDetailRepository,
    IRoleRepository,
    ICommentRepository,
    IAddressRepository
} from './../repository';
//#endregion

//#region  SERVICE IMPORTS
import {
    CategoryService,
    ProductService,
    UserService,
    OrderService,
    CommentService
} from './../business';
import {
    ICategoryService,
    IProductService,
    IUserService,
    IOrderService,
    ICommentService
} from './../business';
//#endregion
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

        container
            .bind<OrdersController>(OrdersController)
            .toSelf()

        container
            .bind<CommentsController>(CommentsController)
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

        container
            .bind<IOrderRepository>(IOCTYPES.ORDER_REPOSITORY)
            .to(OrderRepository)

        container
            .bind<IOrderDetailRepository>(IOCTYPES.ORDERDETAIL_REPOSITORY)
            .to(OrderDetailRepository)

        container
            .bind<IRoleRepository>(IOCTYPES.ROLE_REPOSITORY)
            .to(RoleRepository)

        container
            .bind<ICommentRepository>(IOCTYPES.COMMENT_REPOSITORY)
            .to(CommentRepository)

        container
            .bind<IAddressRepository>(IOCTYPES.ADDRESS_REPOSITORY)
            .to(AddressRepository)

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

        container
            .bind<IOrderService>(IOCTYPES.ORDER_SERVICE)
            .to(OrderService)

        container
            .bind<ICommentService>(IOCTYPES.COMMENT_SERVICE)
            .to(CommentService)
        //#endregion

        return container
    }

}