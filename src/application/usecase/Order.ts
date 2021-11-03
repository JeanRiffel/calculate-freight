import { OrderAbstract } from "../../domain/entity/OrderAbstract";
import { CalculationFactor } from "./CalculationFactor";
import { Volume } from "./Volume";

export class Order extends OrderAbstract {
    private totalVolumeSize : number = 0;
    
    constructor(){
        super();
    }

    getVolumeSize(): number {
       const items = super.getItems();
       items.forEach( ( item ) =>{
            const volume = new Volume(item);
            this.totalVolumeSize = this.totalVolumeSize  + volume.getSize();
       })
       return this.totalVolumeSize;
    }

    getVolumeWeight() : number{
        if (( this.totalVolumeSize === 0  ) ||  ( super.getItems().length !== 0   )){
            this.getVolumeSize();
        }
        return this.totalVolumeSize / new CalculationFactor().getFactorFreight();
    }
}