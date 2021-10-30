"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
class CalculateFreight {
    constructor(item, postalCodeDestination, weightVolume) {
        this.item = item;
        this._item = item;
        this._postalCodeDestination = postalCodeDestination;
        this._weightVolume = weightVolume;
    }
    getValue() {
        if (this._weightVolume.getValue() > this._item.weight) {
            return this._weightVolume.getValue() * this._postalCodeDestination.getValue();
        }
        else {
            return this._item.weight * this._postalCodeDestination.getValue();
        }
    }
}
exports.CalculateFreight = CalculateFreight;
