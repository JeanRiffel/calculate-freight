import { IFreightFactory } from "../entities/IFreightFactory";
import { CalculateFreight } from "./CalculateFreight";
import { CalculationFactor } from "./CalculationFactor";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";
import { Volume } from "./Volume";
import { VolumeWeight } from "./VolumeWeight";

export class FreightFactory implements IFreightFactory {
    
    createCalculateFreight(item: Item, postalCodeDestination: number): CalculateFreight {
        return new CalculateFreight( item, new PostalCodeDestination( postalCodeDestination ), new VolumeWeight( new Volume( item) , new CalculationFactor() ));        
    }
}