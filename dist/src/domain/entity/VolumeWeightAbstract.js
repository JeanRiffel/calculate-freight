"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeWeightAbstract = void 0;
class VolumeWeightAbstract {
    constructor(volumeSize, factorFreightValue) {
        this.volumeSize = volumeSize;
        this._volumeSize = 0;
        this._factorFreightValue = 0;
        this._volumeSize = volumeSize;
        this._factorFreightValue = factorFreightValue;
    }
    getValue() {
        return this._volumeSize / this._factorFreightValue;
    }
}
exports.VolumeWeightAbstract = VolumeWeightAbstract;
