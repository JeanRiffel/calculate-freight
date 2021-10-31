"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreightAbstract = void 0;
class CalculateFreightAbstract {
    constructor(itemWeight, volumeWeight, postalCodeValue) {
        this._postalCodeValue = 0;
        this._itemWeight = 0;
        this._volumeWeight = 0;
        this._itemWeight = itemWeight;
        this._volumeWeight = volumeWeight;
        this._postalCodeValue = postalCodeValue;
    }
    isItemWeightGreaterThenVolumeWeight() {
        return this._itemWeight > this._volumeWeight;
    }
    getValue() {
        if (this.isItemWeightGreaterThenVolumeWeight()) {
            return (this._itemWeight * this._postalCodeValue);
        }
        return (this._volumeWeight * this._postalCodeValue);
    }
}
exports.CalculateFreightAbstract = CalculateFreightAbstract;
