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
const ResClinico_1 = __importDefault(require("../models/ResClinico"));
//We get all the clinic results
function getAllResClinco(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ResClinico_1.default.find((err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                res.send('Error');
            }
        });
    });
}
function getSpecificRes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = req.query._id || '';
        yield ResClinico_1.default.findOne({ '_id': id }, (err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                res.send('Error');
            }
        });
    });
}
//We add a ResClinic to the DB
function addResClinico(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Adding new ResClinico');
        console.log(req.body);
        const nombre = req.body.nombre;
        const idMuestra = req.body.idMuestra;
        const dataResultado = req.body.dataResultado;
        const resultado = req.body.resultado;
        const tipoTest = req.body.tipoTest;
        const newResClinico = new ResClinico_1.default({ nombre, idMuestra, dataResultado, resultado, tipoTest });
        yield newResClinico.save().then((data) => {
            console.log('Added');
            res.status(201).json(data);
        }).catch((err) => {
            console.log('Error in adding the ResClinico');
            res.status(500).json(err);
        });
    });
}
function modifyResClinico(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Updating  ResClinico');
        console.log(req.body);
        const _id = req.body._id;
        const nombre = req.body.nombre;
        const idMuestra = req.body.idMuestra;
        const dataResultado = req.body.dataResultado;
        const resultado = req.body.resultado;
        const tipoTest = req.body.tipoTest;
        console.log('We  are trying to update the ResClinico');
        var query = ResClinico_1.default.findOneAndUpdate({ '_id': _id }, {
            'nombre': nombre,
            'idMuestra': idMuestra,
            'dataResultado': dataResultado,
            'resultado': resultado,
            'tipoTest': tipoTest
        });
        query.exec(function (err, result) {
            if (err) {
                res.status(404).json(err);
                console.log('ERROR! in Updating the ResClinico');
            }
            ;
            res.status(200).json(result);
            console.log('ResClinico updated Succesfully');
        });
    });
}
exports.default = { getAllResClinco, addResClinico, modifyResClinico, getSpecificRes };
