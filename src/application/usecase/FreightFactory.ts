
import { IFreightFactory } from "../../domain/entity/factory/IFreightFactory";
import { PostalCodeRepositoryMemory } from "../../infra/respository/memory/PostalCodeRepositoryMemory";
import { CalculateFreight } from "./CalculateFreight";
import { CalculationFactor } from "./CalculationFactor";
import { Item } from "./Item";
import { Volume } from "./Volume";
import { VolumeWeight } from "./VolumeWeight";

export class FreightFactory implements IFreightFactory {
    
    createCalculateFreight(item: Item, postalCodeDestination: number): CalculateFreight {        
        return new CalculateFreight( item,                                     
                                    new VolumeWeight( new Volume( item),  new CalculationFactor() ) , 
                                    postalCodeDestination,  
                                    new PostalCodeRepositoryMemory());        
    }
}