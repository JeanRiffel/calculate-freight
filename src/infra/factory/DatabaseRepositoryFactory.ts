import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import ICustomerRepository from "../../domain/repository/ICustomerRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import CustomerRepositoryDatabase from "../repository/database/CustomerRepositoryDatabase";

export default class DatabaseRepositoryFactory implements AbstractRepositoryFactory {

	constructor (readonly databaseConnection: DatabaseConnection) {
	}

    createCustomerRepository(): ICustomerRepository {
        return new CustomerRepositoryDatabase(this.databaseConnection);
    }
    


 
}