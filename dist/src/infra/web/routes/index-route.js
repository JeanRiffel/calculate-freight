"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
route.get('/', (request, response) => {
    response.status(200).send('hi.....');
});
exports.default = route;
