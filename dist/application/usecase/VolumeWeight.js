"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeWeight = void 0;
const VolumeWeightAbstract_1 = require("../../domain/entity/VolumeWeightAbstract");
class VolumeWeight extends VolumeWeightAbstract_1.VolumeWeightAbstract {
    constructor(volume, calculationFactor) {
        super(volume.getSize(), calculationFactor.getFactorFreight());
        this.volume = volume;
    }
}
exports.VolumeWeight = VolumeWeight;
