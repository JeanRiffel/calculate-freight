import Product from "../../../domain/entity/Product";
import IProductRepository from "../../../domain/repository/IProductRepository";
import DatabaseConnection from "../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class ProductRepositoryDatabase implements IProductRepository{

    constructor(readonly databaseConnection : DatabaseConnection){}

    getProductId(): string {
        return uuidv4();
    }
    
    async save(product: Product): Promise<boolean> {
        const command = `INSERT INTO public.products(
            id, description, weight, height, length, width, price)
            VALUES ($1, $2, $3, $4, $5, $6, $7) returning * `;

        const values = [ product.id, product.description, product.weight, product.height, product.length, product.width, product.price];

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

    async getById(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    async getAllProducts(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }

}