"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICalculateFreight = void 0;
class ICalculateFreight {
    constructor(itemWeight, volumeWeight, postalCodeValue) {
        this._postalCodeValue = 0;
        this._itemWeight = 0;
        this._volumeWeight = 0;
        this._itemWeight = itemWeight;
        this._volumeWeight = volumeWeight;
        this._postalCodeValue = postalCodeValue;
    }
    isItemWeightGreaterThenWeightVolume() {
        return this._itemWeight > this._volumeWeight;
    }
    getValue() {
        if (this.isItemWeightGreaterThenWeightVolume()) {
            return (this._itemWeight * this._postalCodeValue);
        }
        return (this._volumeWeight * this._postalCodeValue);
    }
}
exports.ICalculateFreight = ICalculateFreight;
