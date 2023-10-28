import ProductFields from "../entity/ProductFields";
import TShirtProductFields from "../entity/TShirtProductFields";

export default class ProductFieldsAdapter {

  private _productInput: any;

  constructor(productInput: any){
    this._productInput = productInput;

  }
  
  productFields(): ProductFields{
    return this.buildTShirtProductFields();
  }

  private buildTShirtProductFields(): ProductFields{
    const tshirtProductFields = new TShirtProductFields();
		tshirtProductFields.id = this._productInput.id;
		tshirtProductFields.description = this._productInput.description;
		tshirtProductFields.length = this._productInput.length;
		tshirtProductFields.width = this._productInput.width;
		tshirtProductFields.weight = this._productInput.weight;
		tshirtProductFields.height = this._productInput.height;
		tshirtProductFields.price = this._productInput.price;
    return tshirtProductFields;
  }
}