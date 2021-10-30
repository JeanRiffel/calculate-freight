import { CalculationFactor } from "./CalculationFactor";
import { Volume } from "./Volume";

export class WeightVolume {
    
    private _volume : Volume;
    private _calculatoinFactor : CalculationFactor;
    
    constructor( readonly volume : Volume, calculationFactor : CalculationFactor  ){
        this._volume = volume;
        this._calculatoinFactor = calculationFactor;
    }

    getValue() : number{
        return this._volume.getValue() / this._calculatoinFactor.getFactorFreight();
    }

}