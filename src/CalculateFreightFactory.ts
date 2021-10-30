import { CalculateFreight } from "./CalculateFreight";
import { CalculateFreightAbstract } from "./CalculateFreightAbstract";
import { CalculationFactor } from "./CalculationFactor";
import { ICalculateFreightFactory } from "./ICalculateFreightFactory";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";
import { Volume } from "./Volume";
import { WeightVolume } from "./WeightVolume";

export class CalculateFreightFactory implements ICalculateFreightFactory {
    
    createCalculateFreight(item: Item, postalCodeDestination: number): CalculateFreightAbstract {
        return new CalculateFreight( item, new PostalCodeDestination( postalCodeDestination ), new WeightVolume( new Volume( item) , new CalculationFactor() ));        
    }
}