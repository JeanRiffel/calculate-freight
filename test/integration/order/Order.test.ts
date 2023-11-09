import PlaceOrderInput from "../../../src/application/dto/order/PlaceOrderInput"
import ProductInput from "../../../src/application/dto/product/ProductInput"
import PlaceOrder from "../../../src/application/usecase/order/PlaceOrder"
import DataBaseConnectionMemory from "../../../src/infra/database/memory/DataBaseConnectionMemory"

describe('Integration - Order',()=>{

  test.skip('Creating an Order use case', ()=>{

    const productInput = new ProductInput()
    productInput.id = "989-4533"
    productInput.description = "tshirt"
    productInput.height = 10
    productInput.length = 15
    productInput.price = 15
    productInput.weight = 5
    productInput.width = 8
    productInput.type = 1
    const productList: Array<ProductInput> = new Array<ProductInput>()

    const placeOrderInput = new PlaceOrderInput(
      '',
      productList
    )

    const databaseConnection = DataBaseConnectionMemory.getInstance();
    const placeOrder = new PlaceOrder(databaseConnection);
    const orderCreated = placeOrder.execute(placeOrderInput);

    expect(orderCreated).toBe(true)

  })

})