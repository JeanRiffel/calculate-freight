import BaseProduct from "../../../domains/product/entity/BaseProduct";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";

export default class RetrieveAllProduct{
  private abstractRepositoryFactory : AbstractRepositoryFactory<BaseProduct>

  constructor(abstractRepositoryFactory : AbstractRepositoryFactory<BaseProduct>){
    this.abstractRepositoryFactory = abstractRepositoryFactory;		
  }

  async execute() : Promise<BaseProduct[]>{         			
		const productRepository = this.abstractRepositoryFactory.createRepository()		
    const listProducts = await productRepository.getAllProducts();
    return listProducts;
  } 
  
}
