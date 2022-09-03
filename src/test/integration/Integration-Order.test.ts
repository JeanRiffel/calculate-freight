import sinon from 'sinon';
import Order from '../../domain/entity/Order';
import Product from '../../domain/entity/Product';

test('Order must have one product', async ()=> {       
    const key : string = '707545-5cdsf8-6s9789';
    const getNewID = sinon.stub().resolves(key);
    
    const productId = await getNewID();       
    const product = new Product(productId);
    product.description = 'Mobile Phone';
    product.height = 10.5;
    product.length = 8.9;
    product.width = 5.6;
    
    const orderId = await getNewID();       
    const order = new Order(orderId);
    order.addProduct(product);

    const productOrdered = order.getProducts();
    expect(productOrdered.length).toEqual(1);
});