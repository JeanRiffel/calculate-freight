"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = void 0;
const VolumeAbstract_1 = require("../../domain/entity/VolumeAbstract");
class Volume extends VolumeAbstract_1.VolumeAbstract {
    constructor(item) {
        super(item.length, item.width, item.height);
        this.item = item;
    }
}
exports.Volume = Volume;
