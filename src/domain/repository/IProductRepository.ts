import Product from "../entity/Product";

export default  interface IProductRespository{
    getId() : string;
    save(product : Product): void;
    delete(id : string): void;
    update(id : string): void;
    getById(id : string) : Product;
    getAllProducts() : Array<Product>;
}