"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
class CalculateFreight {
    constructor(item, weightVolume, postalCodeDestination, postalCodeRespository) {
        this.item = item;
        this._item = item;
        this._volumeWeight = weightVolume;
        this._postalCode = postalCodeRespository.findByPostalCode(postalCodeDestination);
    }
    isItemWeightGreaterThenWeightVolume() {
        return this._item.weight > this._volumeWeight.getValue();
    }
    getValue() {
        if (this.isItemWeightGreaterThenWeightVolume()) {
            return this._item.weight * this._postalCode.value;
        }
        return this._volumeWeight.getValue() * this._postalCode.value;
    }
}
exports.CalculateFreight = CalculateFreight;
