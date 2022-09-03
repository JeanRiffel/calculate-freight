import Product from "../entity/Product";

export default  interface IProductRespository{
    getProductId() : string;
    save(product : Product): boolean;
    delete(id : string): boolean;
    update(id : string): boolean;
    getById(id : string) : Product;
    getAllProducts() : Array<Product>;
}