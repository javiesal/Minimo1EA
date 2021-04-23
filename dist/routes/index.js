"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Rcolectivo_1 = __importDefault(require("./Rcolectivo"));
const router = express_1.Router();
router.use('/app/colectivos', Rcolectivo_1.default);
exports.default = router;
