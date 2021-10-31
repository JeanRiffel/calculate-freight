"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FreightFactory_1 = require("../../src/application/usecase/FreightFactory");
const Item_1 = require("../../src/application/usecase/Item");
test('Calculate freight ', () => {
    const postalCodeDestination = 89878856;
    const item = new Item_1.Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width = 13.5;
    item.height = 9;
    const freightFactory = new FreightFactory_1.FreightFactory();
    const calculateFreight = freightFactory.createCalculateFreight(item, postalCodeDestination);
    const valueFreight = calculateFreight.getValue();
    expect(valueFreight).toBeGreaterThan(0);
});
