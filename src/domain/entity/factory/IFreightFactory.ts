
import { CalculateFreightAbstract } from "../CalculateFreightAbstract";
import { ItemInterface } from "../ItemInterface";


export interface IFreightFactory{
    createCalculateFreight(item: ItemInterface, postalCodeDestination: number): CalculateFreightAbstract;

}