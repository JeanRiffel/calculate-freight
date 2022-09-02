import Customer from "../entity/Customer";

export default  interface ICustomerRepository{
    getId() : string;
    save(customer : Customer): void;
    delete(id : string): void;
    update(id : string): void;
    getById(id : string) : Customer;    
}