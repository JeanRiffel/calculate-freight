import ProductFields from "../entity/ProductFields";
import TShirtProductFields from "../entity/ShirtProductFields";
import SneakerProductFields from "../entity/SneakerProductFields";
import { ProductTypes } from '../utils/enumHelper';

export default class ProductFieldsAdapter {
  private _productInput: any;

  constructor(productInput: any){
    this._productInput = productInput;
  }
  
  productFields(): ProductFields | null{
    switch (this._productInput.type) {
      case ProductTypes.tshirt:
        return this.buildShirtProductFields();  
        break;
      case ProductTypes.sneaker:
        return this.buildSneakerProductFields();  
        break;
      default:
        return null
        break;
    }
  }

  private buildShirtProductFields(): ProductFields {
    const tshirtProductFields = new TShirtProductFields();
		tshirtProductFields.id = this._productInput.id;
		tshirtProductFields.description = this._productInput.description;
		tshirtProductFields.length = this._productInput.length;
		tshirtProductFields.width = this._productInput.width;
		tshirtProductFields.weight = this._productInput.weight;
		tshirtProductFields.height = this._productInput.height;
		tshirtProductFields.price = this._productInput.price;
    tshirtProductFields.type = this._productInput.type;
    return tshirtProductFields;
  }

  private buildSneakerProductFields(): ProductFields {
    const tshirtProductFields = new SneakerProductFields();
		tshirtProductFields.id = this._productInput.id;
		tshirtProductFields.description = this._productInput.description;
		tshirtProductFields.length = this._productInput.length;
		tshirtProductFields.width = this._productInput.width;
		tshirtProductFields.weight = this._productInput.weight;
		tshirtProductFields.height = this._productInput.height;
		tshirtProductFields.price = this._productInput.price;
    tshirtProductFields.type = this._productInput.type;
    return tshirtProductFields;
  }

}