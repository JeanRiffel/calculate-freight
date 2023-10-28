import BaseProduct from "../../../domains/product/entity/BaseProduct";
import AbstractRepositoryFactory from "../../../domains/repository/AbstractRepositoryFactory";
import Repository from "../../../domains/repository/Repository";
import DatabaseConnection from "../../database/DatabaseConnection";
import ProductRepository from "../../repository/database/memory/ProductRepository";

export default class ProductDatabaseRepositoryFactory implements AbstractRepositoryFactory<BaseProduct> {
  private productRepository: ProductRepository;

	constructor (readonly databaseConnection: DatabaseConnection) {
    this.productRepository = new ProductRepository(this.databaseConnection);
	}

  createRepository(): Repository<BaseProduct> {
    return this.productRepository;
  }
}