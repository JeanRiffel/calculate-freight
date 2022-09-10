/*
    An Order must have a Customer and at least a Product
*/
import sinon from 'sinon';
import Order from '../../../src/domain/entity/Order';

test('Should create an Order object without Products', async ()=>{
    const key : string = '707545-5cdsf8-6s9789';
    const getNewID = sinon.stub().resolves(key);
    const id = await getNewID();       

    const order = new Order(id);
    const listProducts = order.getProducts();

    expect(listProducts.length).toEqual(0);
});