import { isThisTypeNode } from "typescript";
import { CalculateFreightAbstract } from "./CalculateFreightAbstract";
import { CalculationFactor } from "./CalculationFactor";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";
import { Volume } from "./Volume";
import { WeightVolume } from "./WeightVolume";

export class CalculateFreight  implements CalculateFreightAbstract {
    
    private _postalCodeDestination : PostalCodeDestination;
    private _item : Item;
    private _weightVolume : WeightVolume;

    constructor( readonly item : Item, postalCodeDestination : PostalCodeDestination,  weightVolume : WeightVolume ){
        this._item =  item;
        this._postalCodeDestination = postalCodeDestination;
        this._weightVolume = weightVolume;
     }

    getValue(): number{ 
        if ( this._weightVolume.getValue() > this._item.weight ){
            return this._weightVolume.getValue() * this._postalCodeDestination.getValue();
        }else{
            return this._item.weight * this._postalCodeDestination.getValue();
        }
    }
}