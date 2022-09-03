import Customer from "../../../domain/entity/Customer";
import ICustomerRepository from "../../../domain/repository/ICustomerRepository";
import DatabaseConnection from "../../database/DatabaseConnection";
import { v4 as uuidv4 } from 'uuid';

export default class CustomerRepositoryDatabase implements ICustomerRepository{
    
    constructor(readonly databaseConnection : DatabaseConnection){
    }

    async getCustomerId(): Promise<string> {
        return uuidv4();   
    }

    async save(customer: Customer): Promise<boolean> {
        
        const [dataCustomer] = await this.
            databaseConnection.query(`insert into system.customer (id, name, postalCode) values ($1, $2, $3) returning *`,
                [customer.id, customer.name, customer.postalCode]   
            );
        return true;
    }

    async delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async update(customer: Customer): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async getById(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }


}