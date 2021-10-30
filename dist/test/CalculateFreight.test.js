"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculateFreight_1 = require("../CalculateFreight");
const Item_1 = require("../Item");
const PostalCodeDestination_1 = require("../PostalCodeDestination");
const Volume_1 = require("../Volume");
test('Whether Postal Code Destination exists is expect to be greater than 0 ', () => {
    const postalCodeDestination = new PostalCodeDestination_1.PostalCodeDestination(89878856);
    expect(postalCodeDestination.getValue()).toBeGreaterThan(0);
});
test('Whether Postal Code Destination not existis is expect to be equal 0 ', () => {
    const postalCodeDestination = new PostalCodeDestination_1.PostalCodeDestination(77777777);
    expect(postalCodeDestination.getValue()).toEqual(0);
});
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
test('Calculate freight ', () => {
    const item = new Item_1.Item();
    item.description = "tshirt";
    item.weight = 19.87;
    item.length = 18;
    item.width = 13.5;
    item.height = 9;
    const calculateFreight = new CalculateFreight_1.CalculateFreight(item, new PostalCodeDestination_1.PostalCodeDestination(89878856));
    const valueFreight = calculateFreight.getValue();
    expect(valueFreight).toBeGreaterThan(0);
});
