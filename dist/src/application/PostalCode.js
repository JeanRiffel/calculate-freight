"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCode = void 0;
class PostalCode {
    constructor() {
        this._id = 0;
        this._code = 0;
        this._city = "";
        this._value = 0;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.PostalCode = PostalCode;
