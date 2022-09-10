import Product from "../entity/Product";

export default  interface IProductRepository{
    getProductId() : string;
    save(product : Product): Promise<boolean>;
    delete(id : string): Promise<boolean>;
    update(id : string): Promise<boolean>;
    getById(id : string) : Promise<Product>;
    getAllProducts() : Promise<Product[]>;
}