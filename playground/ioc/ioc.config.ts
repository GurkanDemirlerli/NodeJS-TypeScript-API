import { Container } 						from 'inversify'
import { IOCTYPES } 						from './ioc-types.enum'
import { 
    IVehicleService, 
    VehicleService,
} from '../services'
import { VehiclesController } from '../controllers'

export module IOC
{
    export const container = new Container()

    export function configureContainer() : Container
    {

        // controllers
        container
            .bind<VehiclesController>(VehiclesController)
            .toSelf()

        // services
        container
            .bind<IVehicleService>(IOCTYPES.VEHICLE_SERVICE)
            .to(VehicleService)
            // .inSingletonScope()
        
        // container
        //     .bind<IVehicleRepository>(IOCTYPES.VEHICLE_REPOSITORY_SERVICE)
        //     .to(VehicleRepositoryService)
        
        return container
    }
    
}