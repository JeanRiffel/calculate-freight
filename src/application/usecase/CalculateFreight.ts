import { ICalculateFreight } from "../../domain/entity/ICalculateFreight";
import { IPostalCodeRepository } from "../../domain/repository/IPostalCodeRepository";
import { Item } from "./Item";
import { VolumeWeight } from "./VolumeWeight";

export class CalculateFreight extends ICalculateFreight {   
    constructor( readonly item : Item, weightVolume : VolumeWeight,  postalCodeDestination : number,  postalCodeRespository : IPostalCodeRepository ){
        super(item.weight, weightVolume.getValue(),  postalCodeRespository.findByPostalCode(postalCodeDestination).value  );        
     }    
}