import Customer from "../../../domain/entity/Customer";
import AbstractRepositoryFactory from "../../../domain/factory/AbstractRepositoryFactory";
import CustomerUpdateInput from "../../dto/customer/CustomerUpdateInput";

export default class CreateCustomer{
    private abstractRepositoryFactory : AbstractRepositoryFactory;

    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.abstractRepositoryFactory = abstractRepositoryFactory;
    }

    async execute( customerInput : CustomerUpdateInput) : Promise<boolean>{
        const customer = new Customer(customerInput.id);
        customer.name = customerInput.name;
        customer.postalCode = customer.postalCode;
        
        return this.abstractRepositoryFactory.
            createCustomerRepository().update(customer);        
    }
}