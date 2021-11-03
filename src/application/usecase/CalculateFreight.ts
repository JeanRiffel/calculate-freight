import { CalculateFreightAbstract } from "../../domain/entity/CalculateFreightAbstract";
import { IPostalCodeRepository } from "../../domain/repository/PostalCodeRepositoryInterface";
import { Order } from "./Order";

export class CalculateFreight extends CalculateFreightAbstract {   
    constructor( readonly order : Order, readonly postalCodeDestination : number, readonly postalCodeRespository : IPostalCodeRepository )
    {
        super(order.getTotalWeight(), order.getVolumeWeight(), postalCodeRespository.findByPostalCode(postalCodeDestination).value);        
    }    
}