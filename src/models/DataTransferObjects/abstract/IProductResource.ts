export interface IProductResource {
    name: string;
    unitPrice: number;// make this money
    description: string;
    category: string;
    supplier: string;
    picture?: string;
}