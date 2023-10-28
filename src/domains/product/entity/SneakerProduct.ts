import BaseProduct from "./BaseProduct";
import ProductFields from "./ProductFields";

export default class Sneaker extends BaseProduct {
  
  constructor(productFields: ProductFields){
    super(productFields);
  }

  isTreekingSneaker(): boolean {
    return true
  }
}