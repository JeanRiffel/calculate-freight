import { CalculateFreight } from "./CalculateFreight";
import { Item } from "./Item";
import { PostalCodeDestination } from "./PostalCodeDestination";

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
    const calculateFreight = new CalculateFreight( item, new PostalCodeDestination( cepDestination ) );
    console.log('The value of freight is ', calculateFreight.getValue());
}

main();


