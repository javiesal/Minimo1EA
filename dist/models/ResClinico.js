"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ResClinicoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idMuestra: { type: String, required: true, unique: true },
    dataResultado: { type: String, required: true },
    resultado: { type: String, required: true },
    tipoTest: { type: String, required: true }
});
exports.default = mongoose_1.model('ResClinico', ResClinicoSchema);
