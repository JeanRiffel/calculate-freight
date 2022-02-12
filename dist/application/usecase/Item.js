"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor() {
        this._value = 0;
        this._id = 0;
        this._description = "";
        this._weight = 0;
        this._length = 0;
        this._width = 0;
        this._height = 0;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
exports.Item = Item;
