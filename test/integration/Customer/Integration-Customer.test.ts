import CustomerInput from "../../../src/application/dto/customer/CustomerInput";
import CreateCustomer from "../../../src/application/usecase/customer/CreateCustomer";
import DatabaseConnectionAdapter from "../../../src/infra/database/DatabaseConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

test('Should create one new Customer', ()=>{
    const databaseConnection = new DatabaseConnectionAdapter();
    const databaseRepositoryFactory = new  DatabaseRepositoryFactory(databaseConnection);

    const customerInput = new CustomerInput('john', '88886654');

    const createCustomer = new CreateCustomer(  databaseRepositoryFactory );
    const isCustomerCreated = createCustomer.execute(customerInput);

    expect(isCustomerCreated).toBeTruthy();
});