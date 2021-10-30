"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
const CalculationFactor_1 = require("./CalculationFactor");
const Volume_1 = require("./Volume");
const WeightVolume_1 = require("./WeightVolume");
class CalculateFreight {
    constructor(item, postalCodeDestination) {
        this.item = item;
        this._item = item;
        this._postalCodeDestination = postalCodeDestination;
    }
    getValue() {
        const weightVolume = new WeightVolume_1.WeightVolume(new Volume_1.Volume(this._item), new CalculationFactor_1.CalculationFactor());
        if (weightVolume.getValue() > this._item.weight) {
            return weightVolume.getValue() * this._postalCodeDestination.getValue();
        }
        else {
            return this._item.weight * this._postalCodeDestination.getValue();
        }
    }
}
exports.CalculateFreight = CalculateFreight;
