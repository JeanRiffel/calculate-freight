import Customer from "../../../domain/entity/Customer";
import AbstractRepositoryFactory from "../../../domain/factory/AbstractRepositoryFactory";
import CustomerInput from "../../dto/customer/CustomerInput";

export default class CreateCustomer{
    private abstractRepositoryFactory : AbstractRepositoryFactory;

    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.abstractRepositoryFactory = abstractRepositoryFactory;
    }

    async execute(customerInput: CustomerInput) : Promise<boolean>{
        const customerId = await this.abstractRepositoryFactory
            .createCustomerRepository().getCustomerId();

        const customer = new Customer(customerId);
        customer.name = customerInput.name;
        customer.postalCode = customer.postalCode;

        return await this.abstractRepositoryFactory.createCustomerRepository().save(customer);        
    }

}