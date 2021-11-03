"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("../../src/application/usecase/Item");
test('Item expect to be  greater than 0', () => {
    const item = new Item_1.Item();
    item.id = 100;
    item.description = 't-shirt';
    item.height = 10;
    item.weight = 5;
    item.length = 6;
    item.width = 5;
    item.value = 50.01;
    expect(item.value).toBe(50.01);
});
