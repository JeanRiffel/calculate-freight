import Customer from "../../../domain/entity/Customer"
import sinon from 'sinon';

test('Should create a Customer', async ()=>{
    const key : string = '707545-5cdsf8-6s9789';
    const getNewID = sinon.stub().resolves(key);
    const id = await getNewID();
    
    const customer = new Customer(id);
    customer.name = 'john',
    customer.postalCode = 8915369;
    
    expect(customer.id).toEqual(key);
    expect(customer.name).toEqual('john');
    expect(customer.postalCode).toEqual(8915369);
})
