export interface IVehicleService {
    create(item: any, callback: (error: any, result: any) => void);
    listAll(callback: (error: any, result: any) => void);
}