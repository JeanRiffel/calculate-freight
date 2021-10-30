import { IPostalCode } from "./IPostalCode";

export interface IPostalCodeRepository {
    findByPostalCode( postalCode : number ) : IPostalCode;
}