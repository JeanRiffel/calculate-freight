"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("../../src/application/usecase/Item");
const Order_1 = require("../../src/application/usecase/Order");
const firstItem = new Item_1.Item();
const secondItem = new Item_1.Item();
beforeEach(() => {
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
    secondItem.width = 1;
    secondItem.value = 30;
});
test('adding item Order', () => {
    const order = new Order_1.Order();
    order.addItem(firstItem);
    expect(order.getItems()).toEqual(expect.arrayContaining([expect.any(Item_1.Item)]));
});
test('get Total Order', () => {
    const order = new Order_1.Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getTotalValue()).toEqual(50);
});
test('get Volume Size', () => {
    const order = new Order_1.Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getVolumeSize()).toEqual(54);
});
test('get Volume Weight', () => {
    const order = new Order_1.Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getVolumeWeight()).toEqual(0.18);
});
test('get Total Weight', () => {
    const order = new Order_1.Order();
    order.addItem(firstItem);
    order.addItem(secondItem);
    expect(order.getTotalWeight()).toEqual(25);
});
