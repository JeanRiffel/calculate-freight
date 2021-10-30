import { CalculateFreightAbstract } from "./CalculateFreightAbstract";
import { Item } from "./Item";

export interface ICalculateFreightFactory{
    createCalculateFreight(item : Item,  postalCodeDestination : number) : CalculateFreightAbstract;
}