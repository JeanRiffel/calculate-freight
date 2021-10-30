import { ICalculateFreight } from "./ICalculateFreight";
import { IItem } from "./IItem";

export interface IFreightFactory{
    createCalculateFreight(item: IItem, postalCodeDestination: number): ICalculateFreight;

}