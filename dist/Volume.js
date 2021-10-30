"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = void 0;
class Volume {
    constructor(item) {
        this.item = item;
        this._item = item;
    }
    getValue() {
        return (this._item.length * this._item.width * this._item.height);
    }
}
exports.Volume = Volume;
