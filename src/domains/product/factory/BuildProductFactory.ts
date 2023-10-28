import BaseProduct from "../entity/BaseProduct";
import ProductFields from "../entity/ProductFields";
import TShirtProduct from "../entity/TShirtProduct";

export default class BuildProductFactory {

  buildNewProduct(productFields: ProductFields, productType: number): BaseProduct {    
    return new TShirtProduct (productFields);
  }

}