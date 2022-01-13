"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_route_1 = __importDefault(require("./routes/index-route"));
const server = (0, express_1.default)();
server.use(index_route_1.default);
exports.default = server;
