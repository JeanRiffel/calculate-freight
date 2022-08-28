import Product from "./Product";

export default class Order{

    private productList : Array<Product>;
    private uuid : string = '';

    public getUuid(): string {
        return this.uuid;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    constructor(){
        this.productList = new Array<Product>();
    }

    public addProduct(product : Product){
        this.productList.push(product);
    }

    public getProduct() : Array<Product>{
        return this.productList;
    }

}