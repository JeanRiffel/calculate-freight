import Product from "../../../domain/entity/Product";
import AbstractRepositoryFactory from "../../../domain/factory/AbstractRepositoryFactory";
import ProductInput from "../../dto/product/ProductInput";


export default class CreateProduct{

    private abstractRepositoryFactory : AbstractRepositoryFactory

    constructor(abstractRepositoryFactory : AbstractRepositoryFactory){
        this.abstractRepositoryFactory = abstractRepositoryFactory;
    }

    async execute(productInput : ProductInput) : Promise<boolean>{
        const productId = await this.abstractRepositoryFactory
            .createProductRepository().getProductId();

        const product = new Product(productId);
        product.description = productInput.description;
        product.weight = productInput.weight;
        product.height = productInput.height;
        product.length = productInput.length;
        product.width = productInput.width;
        product.price = productInput.price;
                
        return await this.abstractRepositoryFactory
            .createProductRepository()
            .save(product);
    } 

}