import { VolumeWeightAbstract } from "../../domain/entity/VolumeWeightAbstract";
import { CalculationFactor } from "./CalculationFactor";
import { Volume } from "./Volume";

export class VolumeWeight extends VolumeWeightAbstract {   
    
    constructor( readonly volume : Volume, calculationFactor : CalculationFactor  ){
        super(volume.getValue(), calculationFactor.getFactorFreight()  );        
    }
}