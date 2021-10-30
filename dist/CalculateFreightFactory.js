"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreightFactory = void 0;
const CalculateFreight_1 = require("./CalculateFreight");
const CalculationFactor_1 = require("./CalculationFactor");
const PostalCodeDestination_1 = require("./PostalCodeDestination");
const Volume_1 = require("./Volume");
const WeightVolume_1 = require("./WeightVolume");
class CalculateFreightFactory {
    createCalculateFreight(item, postalCodeDestination) {
        return new CalculateFreight_1.CalculateFreight(item, new PostalCodeDestination_1.PostalCodeDestination(postalCodeDestination), new WeightVolume_1.WeightVolume(new Volume_1.Volume(item), new CalculationFactor_1.CalculationFactor()));
    }
}
exports.CalculateFreightFactory = CalculateFreightFactory;
