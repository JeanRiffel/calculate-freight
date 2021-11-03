
import { CalculateFreightAbstract } from "../CalculateFreightAbstract";
import { OrderAbstract } from "../OrderAbstract";


export interface IFreightFactory{
    createCalculateFreight(order: OrderAbstract, postalCodeDestination: number): CalculateFreightAbstract;

}