import { Item } from "../../src/application/usecase/Item";
import { Order } from "../../src/application/usecase/Order";

test('adding item Order', ()=>{
    const item = new Item();
    item.id = 100;
    item.description = 't-shirt';
    item.height = 10;
    item.weight = 5;
    item.length = 6;
    item.width = 5;

    const order = new Order();
    order.addItem(item);
  
    expect(order.getItems()).toEqual( expect.arrayContaining([expect.any(Item)]) );

});