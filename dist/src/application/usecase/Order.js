"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderAbstract_1 = require("../../domain/entity/OrderAbstract");
const CalculationFactor_1 = require("./CalculationFactor");
const Volume_1 = require("./Volume");
class Order extends OrderAbstract_1.OrderAbstract {
    constructor() {
        super();
        this.totalVolumeSize = 0;
    }
    getVolumeSize() {
        const items = super.getItems();
        items.forEach((item) => {
            const volume = new Volume_1.Volume(item);
            this.totalVolumeSize = this.totalVolumeSize + volume.getSize();
        });
        return this.totalVolumeSize;
    }
    getVolumeWeight() {
        if ((this.totalVolumeSize === 0) || (super.getItems().length !== 0)) {
            this.getVolumeSize();
        }
        return this.totalVolumeSize / new CalculationFactor_1.CalculationFactor().getFactorFreight();
    }
}
exports.Order = Order;
