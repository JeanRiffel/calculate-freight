"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculateFreight_1 = require("./CalculateFreight");
const CalculationFactor_1 = require("./CalculationFactor");
const Item_1 = require("./Item");
const PostalCodeDestination_1 = require("./PostalCodeDestination");
const Volume_1 = require("./Volume");
const WeightVolume_1 = require("./WeightVolume");
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
    const weightVolume = new WeightVolume_1.WeightVolume(new Volume_1.Volume(item), new CalculationFactor_1.CalculationFactor());
    const calculateFreight = new CalculateFreight_1.CalculateFreight(item, new PostalCodeDestination_1.PostalCodeDestination(cepDestination), weightVolume);
    console.log('The value of freight is ', calculateFreight.getValue());
};
main();
