"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colectivo_1 = __importDefault(require("../models/Colectivo"));
//función para obtener TODOS los colectivos
function getAllColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Colectivo_1.default.find((err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                res.send('Error');
            }
        });
    });
}
//función para añadir un colectivo
function addColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Añadiendo colectivo');
        console.log(req.body);
        const nombre = req.body.nombre;
        const descripcion = req.body.descripcion;
        const vacuna = req.body.vacuna;
        const newColectivo = new Colectivo_1.default({ nombre, descripcion, vacuna });
        yield newColectivo.save().then((data) => {
            console.log('Añadido');
            res.status(200).json(data);
        }).catch((err) => {
            console.log('Error al añadir colectivo');
            res.status(400).json(err);
        });
    });
}
function delColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        Colectivo_1.default.deleteOne({ "_id": req.params.id }).then((data) => {
            res.status(200).json(data);
            console.log('Eliminado satisfactoriamente');
        }).catch((err) => {
            res.status(400).json(err);
            console.log('Error al eliminar');
        });
    });
}
exports.default = { getAllColectivo, addColectivo, delColectivo };
