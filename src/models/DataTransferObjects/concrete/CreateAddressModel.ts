import { ICreateAddressModel } from './../../';
export class CreateAddressModel implements ICreateAddressModel {
    title: string;
    receiverFirstName: string;
    receiverLastName: string;
    content: string;
    city: string;
    region: string;
    country: string;
    phone: string;
    user: string;

    //Bad Mapping, change this
    constructor(_createAddressModel: ICreateAddressModel) {
        this.title = _createAddressModel.title;
        this.receiverFirstName = _createAddressModel.receiverFirstName;
        this.receiverLastName = _createAddressModel.receiverLastName;
        this.content = _createAddressModel.content;
        this.city = _createAddressModel.city;
        this.region = _createAddressModel.region;
        this.country = _createAddressModel.country;
        this.phone = _createAddressModel.phone;
    }
}

//ICreateAddressModel not have user, fix this for better design