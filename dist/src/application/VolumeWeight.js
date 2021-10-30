"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeWeight = void 0;
class VolumeWeight {
    constructor(volume, calculationFactor) {
        this.volume = volume;
        this._volume = volume;
        this._calculatoinFactor = calculationFactor;
    }
    getValue() {
        return this._volume.getValue() / this._calculatoinFactor.getFactorFreight();
    }
}
exports.VolumeWeight = VolumeWeight;
