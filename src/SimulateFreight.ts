import Order from "./Order";

export default class SimulateFreight{
    private factorVolume : number = 6000;

    calculate(order : Order) : number{
        const products = order.getProducts();
        let volumeTotal : number = 0;
        let weightTotal : number = 0;

        products.forEach((product)=>{
            volumeTotal += product.getDimension() / 6000;
            weightTotal += product.getWeight();
        } );

        return 0;
    }

}