import Product from "../../domain/entity/Product";
import IProductRespository from "../../domain/repository/IProductRepository";
import ProductInput from "../dto/ProductInput";

export default class CreateProduct{

    private abstractProductRespository : IProductRespository;

    constructor( abstractProductRepository : IProductRespository ){
        this.abstractProductRespository = abstractProductRepository;
    }

    add(productInput : ProductInput){

        const product = new Product()
        product.setDescription(  productInput.description );
        product.setHeight( productInput.height);
        product.setLength( productInput.length);
        product.setWeight( productInput.weight);
        product.setWidth( productInput.width )
        product.setPrice(productInput.price);

        this.abstractProductRespository.save(product);
    }

    getListProducts () : Array<Product>  {
        return this.abstractProductRespository.getAllProducts();
    }


}