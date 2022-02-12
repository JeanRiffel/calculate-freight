"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeAbstract = void 0;
class VolumeAbstract {
    constructor(length, width, height) {
        this._length = 0;
        this._width = 0;
        this._height = 0;
        this._length = length;
        this._width = width;
        this._height = height;
    }
    getSize() {
        return (this._length * this._width * this._height);
    }
}
exports.VolumeAbstract = VolumeAbstract;
