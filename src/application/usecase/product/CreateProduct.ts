import ProductFieldsAdapter from "../../../domains/product/adapter/ProductFieldsAdapter";
import BaseProduct from "../../../domains/product/entity/BaseProduct";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";
import BuildProductFactory from "../../../domains/product/factory/BuildProductFactory";
import ProductInput from "../../dto/product/ProductInput";
import { ProductError } from '../../../domains/product/utils/enumHelper'
import DataLogger from "../../../domains/service/DataLogger";

export default class CreateProduct{
  private abstractRepositoryFactory: AbstractRepositoryFactory<BaseProduct>
	private dataLogger: DataLogger;

  constructor(
		abstractRepositoryFactory: AbstractRepositoryFactory<BaseProduct>,
		dataLogger: DataLogger
	){
    this.abstractRepositoryFactory = abstractRepositoryFactory;
		this.dataLogger = dataLogger
  }

  async execute(productInput : ProductInput) : Promise<boolean>{         			
		try{
			const productRepository = this.abstractRepositoryFactory.createRepository()
			
			const productId = productRepository.getId()

			productInput.id = productId;

			const productFields = new ProductFieldsAdapter(
				productInput
			).productFields();

			if( productFields === null ) throw ProductError.productFieldsNotFound 

			const product = new BuildProductFactory()
				.buildNewProduct(productFields)
											
			if( product === null ) throw ProductError.productFieldsNotFound

			return await this.abstractRepositoryFactory
				.createRepository()
				.save(product);
			
		} catch(error){			
			this.dataLogger.save(error)
			return false
		}
  } 
}