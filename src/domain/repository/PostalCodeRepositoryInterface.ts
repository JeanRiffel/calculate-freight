import { PostalCodeInterface } from "../entity/PostalCodeInterface";

export interface IPostalCodeRepository {
    findByPostalCode( postalCode : number ) : PostalCodeInterface;
}