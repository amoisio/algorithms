"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var unionFind_1 = __importDefault(require("../algorithms/unionFind"));
var uf = new unionFind_1.default(10);
console.log(uf.size);
console.log(uf.data);
