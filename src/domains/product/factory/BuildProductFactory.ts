import BaseProduct from "../entity/BaseProduct";
import ProductFields from "../entity/ProductFields";
import ShirtProduct from "../entity/ShirtProduct";
import SneakerProduct from "../entity/SneakerProduct";
import { ProductTypes } from "../utils/enumHelper";

export default class BuildProductFactory {

  buildNewProduct(productFields: ProductFields): BaseProduct | null{
    switch (productFields.type) {
      case ProductTypes.tshirt:
        return new ShirtProduct (productFields);        
      case ProductTypes.sneaker:
        return new SneakerProduct (productFields);
      default:
        return null        
    }
  }

}