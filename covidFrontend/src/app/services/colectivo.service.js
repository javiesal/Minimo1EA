"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColectivoService = void 0;
const core_1 = require("@angular/core");
const rooturl_1 = require("./rooturl");
const colectivo_1 = require("../models/colectivo");
let ColectivoService = class ColectivoService {
    constructor(http) {
        this.http = http;
        this.rooturl = new rooturl_1.Rooturl();
    }
    getAllColectivos() {
        return this.http.get(`${this.rooturl.urlapp}/`);
    }
    addColectivo(Colectivo) {
        console.log("Añadiendo colectivo");
        let url = this.rooturl.urlapp;
        console.log(Colectivo);
        return this.http.post(url, Colectivo);
    }
    delColectivo(resClinico) {
        console.log("Eliminando colectivo");
        console.log(resClinico);
        return this.http.post(`${this.rooturl.urlapp}/del`, colectivo_1.Colectivo);
    }
};
ColectivoService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ColectivoService);
exports.ColectivoService = ColectivoService;
