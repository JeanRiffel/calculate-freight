"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
const CalculateFreightAbstract_1 = require("../../domain/entity/CalculateFreightAbstract");
class CalculateFreight extends CalculateFreightAbstract_1.CalculateFreightAbstract {
    constructor(order, postalCodeDestination, postalCodeRespository) {
        super(order.getTotalWeight(), order.getVolumeWeight(), postalCodeRespository.findByPostalCode(postalCodeDestination).value);
        this.order = order;
        this.postalCodeDestination = postalCodeDestination;
        this.postalCodeRespository = postalCodeRespository;
    }
}
exports.CalculateFreight = CalculateFreight;
