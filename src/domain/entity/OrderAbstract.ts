import { ItemInterface } from "./ItemInterface";

export abstract class OrderAbstract{

    private _itemList : ItemInterface[] = [];

    addItem( item : ItemInterface): void{
        this._itemList.push(item);
    }

    getItems() : ItemInterface[] {
        return this._itemList;
    }

}