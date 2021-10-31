import { IItem } from "../../domain/entity/IItem";



export class Volume {

    private _item : IItem;

    constructor(readonly item : IItem ){
        this._item = item;        
    }

    getValue() : number{  
        return (this._item.length * this._item.width * this._item.height);
    }
}