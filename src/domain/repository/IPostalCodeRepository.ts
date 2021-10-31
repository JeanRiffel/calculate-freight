import { IPostalCode } from "../entity/IPostalCode";

export interface IPostalCodeRepository {
    findByPostalCode( postalCode : number ) : IPostalCode;
}