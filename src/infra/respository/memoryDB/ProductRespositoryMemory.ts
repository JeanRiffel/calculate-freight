import Product from "../../../domain/entity/Product";
import IProductRespository from "../../../domain/repository/IProductRepository";
import { v4 as uuidv4 } from 'uuid';

export default class ProductRespositoryMemory implements IProductRespository{
    
    private listProducts : Array<Product> = new Array<Product>();

    constructor(){
        //Fake product for testing
        const productFake = new Product();
        productFake.setUuid(this.getUUID());
        productFake.setDescription('book');
        productFake.setHeight(10);
        productFake.setWeight(35);
        productFake.setWidth(15);
        productFake.setLength(10);
        productFake.setPrice(35.50)
        this.listProducts.push(productFake);
    }

    getAllProducts(): Product[] {
        return this.listProducts;
    }
    
    getUUID(): string {
       return uuidv4();;
    }
    save(product: Product): void {
        product.setUuid( this.getUUID() );

        this.listProducts.push(product);
    }
    delete(uuid: string): void {
        throw new Error("Method not implemented.");
    }
    update(uuid: string): void {
        throw new Error("Method not implemented.");
    }

}