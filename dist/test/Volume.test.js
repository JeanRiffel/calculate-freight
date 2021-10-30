"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("../src/application/Item");
const Volume_1 = require("../src/application/Volume");
test('Volume is expect to be greater than 0 ', () => {
    const item = new Item_1.Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width = 13.5;
    item.height = 9;
    const volume = new Volume_1.Volume(item);
    expect(volume.getValue()).toBeGreaterThan(0);
});
