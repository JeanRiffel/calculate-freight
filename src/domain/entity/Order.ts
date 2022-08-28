import Address from "../../usecase/Address";
import Product from "./Product";

export default class Order{

    private _id : number = 0;
    private _products : Product[];
    private _freight : number = 0;
    private _deliveryAddress : Address;

    constructor(deliveryAddress : Address){
        this._products = [];
        this._deliveryAddress = deliveryAddress;
    }

    id() : number{
        return this._id;
    }

    addProduct(product : Product  ){
        this._products.push(product);
    }

    getProducts() : Product[]{
        return this._products;
    }

    getTotal() : number{
        let total = 0;
        this._products.forEach( (product)=>{
            total += product.getPrice();
        } );
        return total;
    }

    setFreight(value : number){
        this._freight = value;        
    }

    getFreight():number{
        return this._freight;
    }

    getDeliveryAddress(): Address{
        return this._deliveryAddress;
    }

}