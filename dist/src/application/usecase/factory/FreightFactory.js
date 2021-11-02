"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightFactory = void 0;
const PostalCodeRepositoryMemory_1 = require("../../../infra/respository/memory/PostalCodeRepositoryMemory");
const CalculateFreight_1 = require("../CalculateFreight");
const CalculationFactor_1 = require("../CalculationFactor");
const Volume_1 = require("../Volume");
const VolumeWeight_1 = require("../VolumeWeight");
class FreightFactory {
    createCalculateFreight(item, postalCodeDestination) {
        return new CalculateFreight_1.CalculateFreight(item, new VolumeWeight_1.VolumeWeight(new Volume_1.Volume(item), new CalculationFactor_1.CalculationFactor()), postalCodeDestination, new PostalCodeRepositoryMemory_1.PostalCodeRepositoryMemory());
    }
}
exports.FreightFactory = FreightFactory;
