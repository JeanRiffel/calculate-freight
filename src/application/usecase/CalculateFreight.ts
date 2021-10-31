
import { CalculateFreightAbstract } from "../../domain/entity/CalculateFreightAbstract";
import { IPostalCodeRepository } from "../../domain/repository/IPostalCodeRepository";
import { Item } from "./Item";
import { VolumeWeight } from "./VolumeWeight";

export class CalculateFreight extends CalculateFreightAbstract {   
    constructor( readonly item : Item, weightVolume : VolumeWeight,  postalCodeDestination : number,  postalCodeRespository : IPostalCodeRepository ){
        super(item.weight, weightVolume.getValue(),  postalCodeRespository.findByPostalCode(postalCodeDestination).value  );        
     }    
}