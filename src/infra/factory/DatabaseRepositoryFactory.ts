import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import IProductRepository from "../../domain/repository/IProductRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import ProductRepositoryDatabase from "../repository/database/ProductRepositoryDatabase";

export default class DatabaseRepositoryFactory implements AbstractRepositoryFactory {

	constructor (readonly databaseConnection: DatabaseConnection) {
	}
 
    createProductRepository(): IProductRepository {
        return new ProductRepositoryDatabase(this.databaseConnection);
    }

}