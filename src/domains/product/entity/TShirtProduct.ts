import BaseProduct from "./BaseProduct";
import ProductFields from "./ProductFields";

export default class TShirtProduct extends BaseProduct {

  constructor(productFields: ProductFields){
    super(productFields);
  }

  isSocial(): boolean{
    return true;
  }

}