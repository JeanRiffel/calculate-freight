"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightVolume = void 0;
class WeightVolume {
    constructor(volume, calculationFactor) {
        this.volume = volume;
        this._volume = volume;
        this._calculatoinFactor = calculationFactor;
    }
    getValue() {
        return this._volume.getValue() / this._calculatoinFactor.getFactorFreight();
    }
}
exports.WeightVolume = WeightVolume;
