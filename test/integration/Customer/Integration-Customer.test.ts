import CustomerInput from "../../../src/application/dto/customer/CustomerInput";
import CreateCustomer from "../../../src/application/usecase/customer/CreateCustomer";
import ObtainAllCustomers from "../../../src/application/usecase/customer/ObtainAllCustomer";
import ObtainCustomer from "../../../src/application/usecase/customer/ObtainCustomer";
import DatabaseConnectionAdapter from "../../../src/infra/database/DatabaseConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

test('Should create one new Customer', async ()=>{
    const databaseConnection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new  DatabaseRepositoryFactory(databaseConnection);

    const customerInput = new CustomerInput('john', '88886654');

    const createCustomer = new CreateCustomer(databaseRepositoryFactory);
    const isCustomerCreated = await createCustomer.execute(customerInput);
    expect(isCustomerCreated).toBeTruthy();
});

test('Should get Customer by ID', async ()=>{    
    const databaseConnection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new  DatabaseRepositoryFactory(databaseConnection);

    const id = 'fcc7c5b8-1557-4da9-b290-ba0fb92cafe9';
    const obtainCustomer = new ObtainCustomer( databaseRepositoryFactory );
    const customer = await obtainCustomer.execute(id);    
    expect(customer.id).toEqual(id);
});

test('Should get All Customers', async()=>{
    const databaseConnection = DatabaseConnectionAdapter.getInstance();
    const databaseRepositoryFactory = new DatabaseRepositoryFactory(databaseConnection);

    const obtainAllCustomers = new ObtainAllCustomers(databaseRepositoryFactory);
    const customerList = await obtainAllCustomers.execute();
    expect(customerList.length).toBeGreaterThan(0);
});


