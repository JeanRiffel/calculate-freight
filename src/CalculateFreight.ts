import { isThisTypeNode } from "typescript";
import { CalculationFactor } from "./CalculationFactor";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";
import { Volume } from "./Volume";
import { WeightVolume } from "./WeightVolume";

export class CalculateFreight{
    
    private _postalCodeDestination : PostalCodeDestination;
    private _item : Item;

    constructor( readonly item : Item, postalCodeDestination : PostalCodeDestination ){
        this._item =  item;
        this._postalCodeDestination = postalCodeDestination;
     }

    getValue(): number{
        const weightVolume = new WeightVolume( new Volume( this._item ) , new CalculationFactor()  );
               
        if ( weightVolume.getValue() > this._item.weight ){
            return weightVolume.getValue() * this._postalCodeDestination.getValue();
        }else{
            return this._item.weight * this._postalCodeDestination.getValue();
        }
    }
}