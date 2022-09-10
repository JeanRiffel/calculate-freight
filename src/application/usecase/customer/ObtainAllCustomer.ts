import AbstractRepositoryFactory from "../../../domain/factory/AbstractRepositoryFactory";
import CustomerOutput from "../../dto/customer/CustomerOutput";

export default class ObtainAllCustomers {

    private abstractRepositoryFactory : AbstractRepositoryFactory;

    constructor(abstractRepositoryFactory : AbstractRepositoryFactory){
        this.abstractRepositoryFactory = abstractRepositoryFactory;
    }

    async execute() : Promise<CustomerOutput[]>{

        const customerList = await this.abstractRepositoryFactory
            .createCustomerRepository().getAll();

        const customerOutputList : CustomerOutput[] = [];

        if(!customerList) return customerOutputList;

        customerList.forEach( (item)=>{
            const customerOutput = new CustomerOutput(
                item.id,
                item.name,
                item.postalCode
            );
            customerOutputList.push(customerOutput);            
        });

        return customerOutputList;
    }
}
