import ICustomerRepository from "../repository/ICustomerRepository";
import IOrderRepository from "../repository/IOrderRepository";
import IProductRespository from "../repository/IProductRepository";

export default interface AbstractRepositoryFactory {
	createCustomerRepository(): ICustomerRepository;
	//createOrderRepository(): IOrderRepository;
	createProductRepository(): IProductRespository;    
}