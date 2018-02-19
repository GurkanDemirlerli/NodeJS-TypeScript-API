import { IUserModel } from '../../model/interfaces/IUserModel';
import BaseBusiness = require("./base/BaseBusiness");

interface UserBusiness extends BaseBusiness<IUserModel> {
    
} 
export = UserBusiness;