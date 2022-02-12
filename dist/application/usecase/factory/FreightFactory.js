"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightFactory = void 0;
const PostalCodeRepositoryMemory_1 = require("../../../infra/respository/memory/PostalCodeRepositoryMemory");
const CalculateFreight_1 = require("../CalculateFreight");
class FreightFactory {
    createCalculateFreight(order, postalCodeDestination) {
        return new CalculateFreight_1.CalculateFreight(order, postalCodeDestination, new PostalCodeRepositoryMemory_1.PostalCodeRepositoryMemory());
    }
}
exports.FreightFactory = FreightFactory;
