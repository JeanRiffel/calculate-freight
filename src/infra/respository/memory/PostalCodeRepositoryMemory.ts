import { PostalCodeOutPut } from "../../../application/dto/PostalCodeOutPut";
import { IPostalCodeRepository } from "../../../domain/repository/PostalCodeRepositoryInterface";

export  class PostalCodeRepositoryMemory  implements IPostalCodeRepository{
        
    private listPostalCode =  [ { "id" : 1, "code" : 89897856, "city" : "Sao Paulo", "value" : 15.58 },
                                { "id" : 2, "code" : 85497856, "city" : "Rio de Janeiro", "value" : 10.66 },
                                { "id" : 3, "code" : 89878856, "city" : "Curtiba", "value" : 9.25 },
                                { "id" : 4, "code" : 98952856, "city" : "Belo Horizonte", "value" : 5.58 }
                            ]; 

    constructor (){}
 
    private convertResult(postalCodeResult : any) : PostalCodeOutPut{
        const postalCode = new PostalCodeOutPut;
        postalCode.id    = postalCodeResult.id;
        postalCode.code  = postalCodeResult.code;
        postalCode.city  = postalCodeResult.city;
        postalCode.value = postalCodeResult.value;
        return postalCode;
    }
            
    public findByPostalCode(postalCode: number): PostalCodeOutPut {
        let postalCodeResult  = this.listPostalCode.find(item => item.code === postalCode);    
        if(!postalCodeResult) throw new Error('Postal code not found');        
        return  this.convertResult(postalCodeResult);
    }

}