"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
const CalculateFreightAbstract_1 = require("../../domain/entity/CalculateFreightAbstract");
class CalculateFreight extends CalculateFreightAbstract_1.CalculateFreightAbstract {
    constructor(item, weightVolume, postalCodeDestination, postalCodeRespository) {
        super(item.weight, weightVolume.getValue(), postalCodeRespository.findByPostalCode(postalCodeDestination).value);
        this.item = item;
    }
}
exports.CalculateFreight = CalculateFreight;
