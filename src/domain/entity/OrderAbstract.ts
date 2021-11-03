import { ItemInterface } from "./ItemInterface";

export abstract class OrderAbstract{

    private _itemList : ItemInterface[] = [];

    addItem( item : ItemInterface ): void{
        this._itemList.push(item);
    }

    getItems() : ItemInterface[] {
        return this._itemList;
    }

    getTotalValue() : number{
        let totalValue : number = 0;
        this._itemList.forEach( item => { totalValue = totalValue + item.value } );
        return totalValue;
    }

    getTotalWeight() : number{
        let totalWeight : number = 0;
        this._itemList.forEach( item => { totalWeight = totalWeight + item.weight});
        return totalWeight;
    }

    abstract getVolumeSize() : number;

    abstract getVolumeWeight(): number;
}