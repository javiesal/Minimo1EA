"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function initiateDB() {
    mongoose_1.default.connect('mongodb://localhost:27017/covid', (error) => {
        if (!error) {
            console.log('Conectado a la BBDD');
        }
        else {
            console.log('Error de conexión con la BBDD');
        }
    });
}
exports.initiateDB = initiateDB;
