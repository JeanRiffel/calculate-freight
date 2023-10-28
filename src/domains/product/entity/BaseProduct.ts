import ProductFields from "./ProductFields";

export default abstract class BaseProduct {
  private _id: string = '';
  private _description: string ='';
  private _weight: number = 0;    
  private _height: number = 0;
  private _length: number = 0;
  private _width: number = 0;
  private _price: number = 0;
  
  constructor(productFields: ProductFields){
    this._id = productFields.id;
    this._description = productFields.description;
    this._weight = productFields.weight;
    this._height = productFields.height;
    this._length = productFields.height;
    this._width = productFields.width;
    this._price = productFields.price;
  }

  get id(): string{ return this._id }
  get description(): string { return this._description }
  get weight(): number { return this._weight } ;    
  get height(): number { return this._height };
  get length(): number { return this._length };
  get width(): number { return this._width };
  get price(): number { return this._price };

  public getVolume(): number {
    return this._height * this._width * this._weight;
  };
}