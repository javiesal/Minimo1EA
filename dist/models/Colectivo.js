"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ColectivoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    vacuna: { type: String, required: true }
});
exports.default = mongoose_1.model('Colectivo', ColectivoSchema);
