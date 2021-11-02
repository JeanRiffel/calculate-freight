"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("../../src/application/usecase/Item");
const Order_1 = require("../../src/application/usecase/Order");
test('adding item Order', () => {
    const item = new Item_1.Item();
    item.id = 100;
    item.description = 't-shirt';
    item.height = 10;
    item.weight = 5;
    item.length = 6;
    item.width = 5;
    const order = new Order_1.Order();
    order.addItem(item);
    expect(order.getItems()).toEqual(expect.arrayContaining([expect.any(String)]));
});
