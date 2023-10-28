import BaseProduct from "../../../../domains/product/entity/BaseProduct";
import Repository from "../../../../domains/repository/Repository";
import DatabaseConnection from "../../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class ProductRepository implements Repository<BaseProduct>{
  private listProducts: Array<BaseProduct>

	constructor(readonly databaseConnection : DatabaseConnection){
		this.listProducts = new Array<BaseProduct>();
	}

	getId(): string {
		return uuidv4();
	}
	
	async save(product: BaseProduct): Promise<boolean> {
		this.listProducts.push(product)								
		return this.listProducts.length > 0
	}
	
	async delete(id: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	
	async update(id: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

	async getById(id: string): Promise<BaseProduct> {
		throw new Error("Method not implemented.");
	}

	async getAllProducts(): Promise<BaseProduct[]> {
		return this.listProducts;
	}

}