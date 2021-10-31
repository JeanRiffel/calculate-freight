"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFreight = void 0;
const ICalculateFreight_1 = require("../../domain/entity/ICalculateFreight");
class CalculateFreight extends ICalculateFreight_1.ICalculateFreight {
    constructor(item, weightVolume, postalCodeDestination, postalCodeRespository) {
        super(item.weight, weightVolume.getValue(), postalCodeRespository.findByPostalCode(postalCodeDestination).value);
        this.item = item;
    }
}
exports.CalculateFreight = CalculateFreight;
