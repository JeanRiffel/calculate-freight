import { CalculationFactor } from "./CalculationFactor";
import { Volume } from "./Volume";

export class VolumeWeight {
    
    private _volume : Volume;
    private _calculationFactor : CalculationFactor;
    
    constructor( readonly volume : Volume, calculationFactor : CalculationFactor  ){
        this._volume = volume;
        this._calculationFactor = calculationFactor;
    }

    getValue() : number{
        return this._volume.getValue() / this._calculationFactor.getFactorFreight();
    }

}