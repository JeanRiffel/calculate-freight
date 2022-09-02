export default class Product {

    private _id : string = '';
    private _description : string = '';
    private _weight : number  = 0;    
    private _height : number = 0;
    private _length : number = 0;
    private _width : number = 0;
    private _price : number = 0;

    constructor(id : string){   
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    set description(value: string){
        this._description = value;
    }    

    get description(): string {
        return this._description;
    }    

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value : number) {
        this._width = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    public getVolume() : number{
        return this._height * this._width * this._weight;
    }
}