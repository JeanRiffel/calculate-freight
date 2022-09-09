import AbstractRepositoryFactory from "../../../domain/factory/AbstractRepositoryFactory";
import CustomerOutput from "../../dto/customer/CustomerOutput";

export default class ObtainCustomer{
    private abstractRepositoryFactory : AbstractRepositoryFactory;

    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.abstractRepositoryFactory = abstractRepositoryFactory;
    }

    async execute(customerId: string) : Promise<CustomerOutput>{
        const customer = await this.abstractRepositoryFactory
            .createCustomerRepository().getById(customerId);
        if(!customer) return new CustomerOutput('','',0);

        const customerOutput = new CustomerOutput(
            customer.id, customer.name, customer.postalCode
            );

        return customerOutput;
    }
}