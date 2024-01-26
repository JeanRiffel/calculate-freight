import sinon from 'sinon';
import Order from "../../../src/domains/order/entity/Order"
import TShirtProduct from "../../../src/domains/product/entity/TShirtProduct";
import TShirtProductFields from "../../../src/domains/product/entity/TShirtProductFields";

const key : string = '707545-5cdsf8-6s9789';
const getNewID = sinon.stub().resolves(key);
const tshirtProductFields: TShirtProductFields = {
  id: getNewID(),
  description: 'My tshirt',
  length: 10,
  width: 5,
  weight: 7,
  height: 15,
  price: 8,
  type:2
}
let product: TShirtProduct;


describe('Unit - Order', ()=>{
  beforeAll(()=>{
    product = new TShirtProduct(tshirtProductFields);
  })

  test('Should create an Order to a TShirt', async ()=>{
    const order = new Order('')
    order.addProduct(product);

    const totalPrice = order.getTotalPrice();
    expect(totalPrice).toEqual(tshirtProductFields.price)
  })
})