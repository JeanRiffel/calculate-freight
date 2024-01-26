import BaseProduct from "../../../../domains/product/entity/BaseProduct";
import Repository from "../../../../domains/repository/Repository";
import DatabaseConnection from "../../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class ProductRepository implements Repository<BaseProduct>{
  constructor(readonly databaseConnection : DatabaseConnection){}
	
	getAll(): Promise<BaseProduct[]> {
		throw new Error("Method not implemented.");
	}
	
	async generateId(): Promise<string> {
		return uuidv4();
	}
	
	async save(product: BaseProduct): Promise<boolean> {
		const command = `INSERT INTO public.products(
				id, description, weight, height, length, width, price)
				VALUES ($1, $2, $3, $4, $5, $6, $7) returning * `;

		const values = [
			product.id,
			product.description,
			product.weight,
			product.height, 
			product.length, 
			product.width,
			product.price];

		const result = await this
			.databaseConnection.query(command, values);
								
		return result.length > 0
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
		throw new Error("Method not implemented.");
	}

}