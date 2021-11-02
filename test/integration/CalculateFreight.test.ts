
import { FreightFactory } from "../../src/application/usecase/factory/FreightFactory";
import { Item } from "../../src/application/usecase/Item";


test('Calculate freight ', ()=>{
    const postalCodeDestination = 89878856;
    const item = new Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width  = 13.5;
    item.height = 9;    
    const freightFactory    = new FreightFactory();
    const calculateFreight  = freightFactory.createCalculateFreight(item, postalCodeDestination );
    const valueFreight      = calculateFreight.getValue();
    expect(valueFreight).toBeGreaterThan(0);
});