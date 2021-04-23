"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resClinicoController_1 = __importDefault(require("../controllers/resClinicoController"));
const router = express_1.Router();
router.get('/', resClinicoController_1.default.getAllResClinco); //We get all the clinic results of covid19
router.post('/', resClinicoController_1.default.addResClinico); //We add a new clinic result
router.post('/modificar', resClinicoController_1.default.modifyResClinico); //We modify a clinic result
router.get('/spec', resClinicoController_1.default.getSpecificRes); //We modify a clinic result
exports.default = router;
