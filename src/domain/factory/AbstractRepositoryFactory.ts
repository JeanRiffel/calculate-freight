import IOrderRepository from "../repository/IOrderRepository";
import IProductRespository from "../repository/IProductRepository";

export default interface AbstractRepositoryFactory {	
	//createOrderRepository(): IOrderRepository;
	createProductRepository(): IProductRespository;    
}