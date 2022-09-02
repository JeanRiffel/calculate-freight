export default class Customer{

    private _id : string = '';
    private _name : string = '';
    private _postalCode : number = 0;

    constructor(id : string){   
        this._id = id;
    }

    get id() : string{
        return this._id;
    }

    set name( value : string){
        this._name = value;
    }

    get name () : string{
        return this._name;
    }
    
    set postalCode(value : number){
        this._postalCode = value;
    }

    get postalCode() : number{
        return this._postalCode;
    }
}