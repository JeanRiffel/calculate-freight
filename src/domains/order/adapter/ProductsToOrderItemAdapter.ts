import BaseProduct from "../../product/entity/BaseProduct";
import OrderItem from "../entity/OrderItem";

export default class ProductToOrderItem{
  private _product: BaseProduct;

  constructor(productList: BaseProduct ){
    this._product = productList;
  }

  public getOrderItem(): OrderItem{
    const orderItem = new OrderItem()    
    orderItem.description = this._product.description;
    orderItem.height = this._product.height;
    orderItem.length = this._product.length;
    orderItem.price = this._product.price;
    orderItem.weight = this._product.weight;
    orderItem.width = this._product.width;    
    return orderItem;
  }

}
