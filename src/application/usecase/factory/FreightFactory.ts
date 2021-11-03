
import { IFreightFactory } from "../../../domain/entity/factory/IFreightFactory";
import { PostalCodeRepositoryMemory } from "../../../infra/respository/memory/PostalCodeRepositoryMemory";
import { CalculateFreight } from "../CalculateFreight";
import { Order } from "../Order";

export class FreightFactory implements IFreightFactory {    
    createCalculateFreight(order: Order, postalCodeDestination: number): CalculateFreight {        
        return new CalculateFreight( order, postalCodeDestination,  new PostalCodeRepositoryMemory());        
    }
}