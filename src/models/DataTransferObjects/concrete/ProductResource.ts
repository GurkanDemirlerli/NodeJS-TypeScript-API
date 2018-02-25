import { IProductResource } from './../../';
export class ProductResource {

    private _productResource: IProductResource;

    constructor(productResource: IProductResource) {
        this._productResource = productResource;
    }

    get name(): string{
        return this._productResource.name;
    }
}