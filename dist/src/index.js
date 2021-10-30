"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FreightFactory_1 = require("./application/FreightFactory");
const Item_1 = require("./application/Item");
const createItem = () => {
    const item = new Item_1.Item();
    item.description = "T-Shirt";
    item.height = 9;
    item.length = 18;
    item.width = 19.87;
    item.weight = 0.700;
    return item;
};
const main = () => {
    const item = createItem();
    const cepDestination = 85497856;
    const freightFactory = new FreightFactory_1.FreightFactory();
    const calculateFreight = freightFactory.createCalculateFreight(item, cepDestination);
    console.log('The value of freight is ', calculateFreight.getValue());
};
main();
