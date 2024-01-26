import ProductFields from "./ProductFields";
import { ProductTypes } from "../utils/enumHelper";

export default abstract class BaseProduct {
  private _id: string = '';
  private _description: string ='';
  private _weight: number = 0;    
  private _height: number = 0;
  private _length: number = 0;
  private _width: number = 0;
  private _price: number = 0;
  private _type: ProductTypes | undefined;
  
  constructor(productFields: ProductFields){

    if(!this.isValidProductFields(productFields)){
      throw  "Invalid fields provided"     
    }
    this.setProductFields(productFields);
  }

  get id(): string{ return this._id }
  get description(): string { return this._description }
  get weight(): number { return this._weight } ;    
  get height(): number { return this._height };
  get length(): number { return this._length };
  get width(): number { return this._width };
  get price(): number {return this._price };
  get type(): ProductTypes | undefined { return this._type}

  public getVolume(): number {
    return this._height * this._width * this._weight;
  };

  private isValidProductFields(productFields: ProductFields): boolean{
    if(!productFields.price) return false;
    return true;
  } 

  private setProductFields(productFields: ProductFields): void{
    this._id = productFields.id;
    this._description = productFields.description;
    this._weight = productFields.weight;
    this._height = productFields.height;
    this._length = productFields.height;
    this._width = productFields.width;
    this._price = productFields.price;
    this._type = productFields.type;
  }
}