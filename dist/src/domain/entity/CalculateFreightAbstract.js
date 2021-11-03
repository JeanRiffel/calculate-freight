"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreightAbstract = void 0;
class CalculateFreightAbstract {
    constructor(orderWeight, orderVolumeWeight, postalCodeValue) {
        this._postalCodeValue = 0;
        this._orderWeight = 0;
        this._orderVolumeWeight = 0;
        this._orderWeight = orderWeight;
        this._orderVolumeWeight = orderVolumeWeight;
        this._postalCodeValue = postalCodeValue;
    }
    isItemWeightGreaterThenVolumeWeight() {
        return this._orderWeight > this._orderVolumeWeight;
    }
    getValue() {
        if (this.isItemWeightGreaterThenVolumeWeight()) {
            return (this._orderWeight * this._postalCodeValue);
        }
        return (this._orderVolumeWeight * this._postalCodeValue);
    }
}
exports.CalculateFreightAbstract = CalculateFreightAbstract;
