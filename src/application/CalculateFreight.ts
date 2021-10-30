
import { ICalculateFreight } from "../entities/ICalculateFreight";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";
import { VolumeWeight } from "./VolumeWeight";

export class CalculateFreight  implements ICalculateFreight {
    
    private _postalCodeDestination : PostalCodeDestination;
    private _item : Item;
    private _volumeWeight : VolumeWeight;

    constructor( readonly item : Item, postalCodeDestination : PostalCodeDestination,  weightVolume : VolumeWeight ){
        this._item =  item;
        this._postalCodeDestination = postalCodeDestination;
        this._volumeWeight = weightVolume;
     }

    private isItemWeightGreaterThenWeightVolume() : boolean{
        return  this._item.weight > this._volumeWeight.getValue();
    }

    public getValue(): number{ 
        if ( this.isItemWeightGreaterThenWeightVolume() ){
            return this._item.weight * this._postalCodeDestination.getValue();            
        }else{
            return this._volumeWeight.getValue() * this._postalCodeDestination.getValue();
        }
    }
}