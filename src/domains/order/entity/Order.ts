import BaseProduct from "../../product/entity/BaseProduct";

export default class Order{
  private _productList : Array<BaseProduct>;
  private _id : string = '';
    
  constructor(id : string){
    this._productList = new Array<BaseProduct>();
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  public addProduct(product : BaseProduct){
    this._productList.push(product);
  }

  public getProducts() : Array<BaseProduct>{
    return this._productList;
  }

  public getTotalPrice() : number{
    const totalPrice = this._productList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price, 0  
    )
    return totalPrice;
  }

  public getTotalVolume() : number{
    return 0;
  }

  public getTotalWeight() : number{
    return 0;
  }
}
