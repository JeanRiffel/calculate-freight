import Customer from "../entity/Customer";

export default  interface ICustomerRepository{
    getCustomerId() : Promise<string>;
    save(customer : Customer): Promise<boolean>;
    delete(id : string): Promise<boolean>;
    update(customer : Customer): Promise<boolean>;
    getById(id : string) : Promise<Customer | undefined>;    
}