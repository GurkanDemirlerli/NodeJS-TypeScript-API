import { IBaseBusiness } from '../../../app/business/interfaces/base/BaseBusiness';
import IReadController = require("./../common/ReadController");
import IWriteController = require("./../common/WriteController");
export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController{
    
    
} 