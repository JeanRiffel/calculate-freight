import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import ICustomerRepository from "../../domain/repository/ICustomerRepository";
import IProductRepository from "../../domain/repository/IProductRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import CustomerRepositoryDatabase from "../repository/database/CustomerRepositoryDatabase";
import ProductRepositoryDatabase from "../repository/database/ProductRepositoryDatabase";

export default class DatabaseRepositoryFactory implements AbstractRepositoryFactory {

	constructor (readonly databaseConnection: DatabaseConnection) {
	}

    createCustomerRepository(): ICustomerRepository {
        return new CustomerRepositoryDatabase(this.databaseConnection);
    }

    createProductRepository(): IProductRepository {
        return new ProductRepositoryDatabase(this.databaseConnection);
    }

}