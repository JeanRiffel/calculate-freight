import sinon from 'sinon';
import Product from '../../../src/domain/entity/Product';

test('Should create a product', async ()=>{
    const key : string = '707545-5cdsf8-6s9789';
    const getNewID = sinon.stub().resolves(key);
    
    const productId = await getNewID();       
    const product = new Product(productId);
    product.description = 'Mobile Phone';
    product.height = 10.5;
    product.length = 8.9;
    product.width = 5.6;

    expect(product).toBeInstanceOf(Product);
});