import CustomerInput from "../../../src/application/dto/customer/CustomerInput";
import CreateCustomer from "../../../src/application/usecase/customer/CreateCustomer";
import ObtainCustomer from "../../../src/application/usecase/customer/ObtainCustomer";
import DatabaseConnectionAdapter from "../../../src/infra/database/DatabaseConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

test('Should create one new Customer', async ()=>{
    const databaseConnection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new  DatabaseRepositoryFactory(databaseConnection);

    const customerInput = new CustomerInput('john', '88886654');

    const createCustomer = new CreateCustomer(  databaseRepositoryFactory );
    const isCustomerCreated = await createCustomer.execute(customerInput);
    expect(isCustomerCreated).toBeTruthy();
});

test('Should get Customer by ID', async ()=>{    
    const databaseConnection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new  DatabaseRepositoryFactory(databaseConnection);

    const id = '3f44a9e6-4cce-49ef-83f2-206f70847617';
    const obtainCustomer = new ObtainCustomer( databaseRepositoryFactory );
    const customer = await obtainCustomer.execute(id);
    
    expect(customer.id).toEqual(id);
});