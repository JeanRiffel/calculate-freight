import Product from "./Product";

export default class Order{

    private _productList : Array<Product>;

    private _id : string = '';
    
    constructor(id : string){
        this._productList = new Array<Product>();
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    public addProduct(product : Product){
        this._productList.push(product);
    }

    public getProducts() : Array<Product>{
        return this._productList;
    }

    public getTotalPrice() : number{
        return 0;
    }

    public getTotalVolume() : number{
        return 0;
    }

    public getTotalWeight() : number{
        return 0;
    }

}