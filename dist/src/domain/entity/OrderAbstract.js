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
    getTotalValue() {
        let totalValue = 0;
        this._itemList.forEach(item => { totalValue = totalValue + item.value; });
        return totalValue;
    }
    getTotalWeight() {
        let totalWeight = 0;
        this._itemList.forEach(item => { totalWeight = totalWeight + item.weight; });
        return totalWeight;
    }
}
exports.OrderAbstract = OrderAbstract;
