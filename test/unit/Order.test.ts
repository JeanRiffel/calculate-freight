import { Item } from "../../src/application/usecase/Item";
import { Order } from "../../src/application/usecase/Order";

const firstItem = new Item();
const secondItem = new Item();

beforeEach(()=>{  
    firstItem.id = 100;
    firstItem.description = 't-shirt blue';
    firstItem.weight = 10;
    firstItem.height = 3;
    firstItem.length = 3;
    firstItem.width = 5;
    firstItem.value = 20;
    secondItem.id = 100;
    secondItem.description = 't-shirt red';
    secondItem.weight = 15;
    secondItem.height = 3; 
    secondItem.length = 3;
    secondItem.width  = 1;
    secondItem.value  = 30;
});

test('adding item Order', ()=>{
    const order = new Order();
    order.addItem(firstItem);
    expect(order.getItems()).toEqual( expect.arrayContaining([expect.any(Item)]) );
});

test('get Total Order',()=>{
    const order = new Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getTotalValue()).toEqual(50);
});

test('get Volume Size', ()=>{
    const order = new Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getVolumeSize()).toEqual(54);
});

test('get Volume Weight', ()=>{
    const order = new Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getVolumeWeight()).toEqual(0.18);
});

test('get Total Weight', ()=>{
    const order = new Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getTotalWeight()).toEqual(25);
});

