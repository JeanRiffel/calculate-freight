import ProductsToOrderItemAdapter from "../../../domains/order/adapter/ProductsToOrderItemAdapter";
import Order from "../../../domains/order/entity/Order";
import ProductFieldsAdapter from "../../../domains/product/adapter/ProductFieldsAdapter";
import BuildProductFactory from "../../../domains/product/factory/BuildProductFactory";
import DatabaseConnection from "../../../infra/database/DatabaseConnection";
import OrderItemMemoryRepositoryFactory from "../../../infra/factory/memory/OrderItemMemoryRepositoryFactory";
import OrderMemoryRepositoryFactory from "../../../infra/factory/memory/OrderMemoryRepositoryFactory";
import OrderRepository from "../../../infra/repository/database/memory/OrderRepository";
import PlaceOrderInput from "../../dto/order/PlaceOrderInput";

export default class PlaceOrder{
  private _databaseConnection: DatabaseConnection;

  constructor(dataBaseConnection: DatabaseConnection ){
    this._databaseConnection = dataBaseConnection;
  }

  public async execute(placeOrderInput: PlaceOrderInput){
    const productListInput  = placeOrderInput.productList;
    const productFactory = new BuildProductFactory();
    const orderRepository = new OrderMemoryRepositoryFactory(this._databaseConnection).createRepository();
    const orderItemRepository = new OrderItemMemoryRepositoryFactory(this._databaseConnection).createRepository();
        
    const orderId = await orderRepository.generateId()

    productListInput.forEach(async (item)=>{
      const productAdapter = new ProductFieldsAdapter(item);
      const productFields = productAdapter.productFields();
      if(!productFields) return
      const product = productFactory.buildNewProduct(productFields);
      
      if(!product) return
      const orderItemAdapter = new ProductsToOrderItemAdapter(product)
      const orderItem = orderItemAdapter.getOrderItem()
      
      orderItem.orderId = orderId;
      orderItem.id = await orderItemRepository.generateId()
      await orderItemRepository.save(orderItem)
    })

    const order = new Order(orderId)
    return  await orderRepository.save(order)
  }

}
