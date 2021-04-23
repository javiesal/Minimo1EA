"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Código que arranca la app
//Imports
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database"); //importamos la funcion para init DB
const index_1 = __importDefault(require("./routes/index"));
//Importando Rutas
//Inicializaciones
const app = express_1.default(); //App Init
const port = 3702; //Port
//Settings 
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('', index_1.default);
app.use(body_parser_1.default.json());
//Middlewares
app.use(express_1.default.json()); //Para entender los JSON que me llegaran
app.use(express_1.default.urlencoded({ extended: false })); //Cuando un form de html me llegue pueda interpretarlo
//Rutas (definimo el path y luego indicamos la variable que importamos del folder Routes)
//Aqui utilizamos .use porque tendremos varias rutas
//Archivos estaticos
//DataBase
database_1.initiateDB();
//Inicialización del Servidor
app.listen(port, function () {
    console.log('Server Listening on port: ' + port);
});
