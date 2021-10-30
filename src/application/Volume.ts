import { Item } from "./Item";

export class Volume {

    private _item : Item;

    constructor(readonly item : Item ){
        this._item = item;        
    }

    getValue() : number{  
        return (this._item.length * this._item.width * this._item.height);
    }
}