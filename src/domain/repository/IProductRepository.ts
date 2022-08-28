import Product from "../entity/Product";

export default  interface IProductRespository{
    getUUID() : string;
    save(product : Product): void;
    delete(uuid : string): void;
    update(uuid : string): void;
    getAllProducts() : Array<Product>;
}