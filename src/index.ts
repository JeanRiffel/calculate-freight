
import { FreightFactory } from "./application/FreightFactory";
import { Item } from "./application/Item";

const createItem = () : Item => {
    const item = new Item();
    item.description = "T-Shirt";
    item.height = 9;
    item.length = 18;
    item.width  = 19.87;
    item.weight = 0.700;    
    return item;
}

const main = ()=>{
    const item = createItem();
    const cepDestination : number = 85497856;
    
    const freightFactory = new FreightFactory();
    const calculateFreight = freightFactory.createCalculateFreight(item, cepDestination);    
    
    
    console.log('The value of freight is ', calculateFreight.getValue());
}

main();


