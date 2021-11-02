"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderAbstract = void 0;
class OrderAbstract {
    constructor() {
        this._itemList = [];
    }
    addItem(item) {
        this._itemList.push(item);
    }
    getItems() {
        return this._itemList;
    }
}
exports.OrderAbstract = OrderAbstract;
