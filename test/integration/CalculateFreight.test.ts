import { FreightFactory } from "../../src/application/usecase/factory/FreightFactory";
import { Item } from "../../src/application/usecase/Item";
import { Order } from "../../src/application/usecase/Order";

test('Calculate freight ', ()=>{
    const postalCodeDestination = 89878856;
    const item = new Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width  = 13.5;
    item.height = 9;    
    const order = new Order();
    order.addItem(item);
    const freightFactory    = new FreightFactory();
    const calculateFreight  = freightFactory.createCalculateFreight(order, postalCodeDestination );
    const valueFreight      = calculateFreight.getValue();
    expect(valueFreight).toEqual(183.7975);
});