"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const colectivoController_1 = __importDefault(require("../controllers/colectivoController"));
const router = express_1.Router();
router.get('/', colectivoController_1.default.getAllColectivo); //Listar TODOS los colectivos
router.post('/', colectivoController_1.default.addColectivo); //Añadir colectivo
router.delete('/del', colectivoController_1.default.delColectivo); //Borrar colectivo
exports.default = router;
