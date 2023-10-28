import ProductFieldsAdapter from "../../../domains/product/adapter/ProductFieldsAdapter";
import BaseProduct from "../../../domains/product/entity/BaseProduct";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";
import BuildProductFactory from "../../../domains/product/factory/BuildProductFactory";
import ProductInput from "../../dto/product/ProductInput";

export default class CreateProduct{

  private abstractRepositoryFactory : AbstractRepositoryFactory<BaseProduct>

  constructor(abstractRepositoryFactory : AbstractRepositoryFactory<BaseProduct>){
    this.abstractRepositoryFactory = abstractRepositoryFactory;		
  }

  async execute(productInput : ProductInput) : Promise<boolean>{         			
		const productRepository = this.abstractRepositoryFactory.createRepository()
		
		const productId = productRepository.getId()

		productInput.id = productId;

		const productFields = new ProductFieldsAdapter(
			productInput
		).productFields();

		const product = new BuildProductFactory()
			.buildNewProduct(productFields, productInput.productType)
                    
    return await this.abstractRepositoryFactory
      .createRepository()
      .save(product);
  } 
}