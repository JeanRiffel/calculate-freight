"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
class CalculateFreight {
    constructor(item, postalCodeDestination, weightVolume) {
        this.item = item;
        this._item = item;
        this._postalCodeDestination = postalCodeDestination;
        this._volumeWeight = weightVolume;
    }
    isItemWeightGreaterThenWeightVolume() {
        return this._item.weight > this._volumeWeight.getValue();
    }
    getValue() {
        if (this.isItemWeightGreaterThenWeightVolume()) {
            return this._item.weight * this._postalCodeDestination.getValue();
        }
        else {
            return this._volumeWeight.getValue() * this._postalCodeDestination.getValue();
        }
    }
}
exports.CalculateFreight = CalculateFreight;
