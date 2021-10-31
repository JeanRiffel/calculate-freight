import { ICalculateFreight } from "../../domain/entity/ICalculateFreight";
import { IPostalCode } from "../../domain/entity/IPostalCode";
import { IPostalCodeRepository } from "../../domain/repository/IPostalCodeRepository";
import { Item } from "./Item";
import { VolumeWeight } from "./VolumeWeight";

export class CalculateFreight  implements ICalculateFreight {   
    
    private _item : Item;
    private _volumeWeight : VolumeWeight;    
    private _postalCode : IPostalCode;

    constructor( readonly item : Item, weightVolume : VolumeWeight,  postalCodeDestination : number,  postalCodeRespository : IPostalCodeRepository ){
        this._item          =  item;        
        this._volumeWeight  = weightVolume;
        this._postalCode    = postalCodeRespository.findByPostalCode(postalCodeDestination);
     }

    private isItemWeightGreaterThenWeightVolume() : boolean{
        return  this._item.weight > this._volumeWeight.getValue();
    }

    public getValue(): number{         
        if (this.isItemWeightGreaterThenWeightVolume() ){
            return this._item.weight * this._postalCode.value;
        }        
        return this._volumeWeight.getValue() * this._postalCode.value;        
    }
}