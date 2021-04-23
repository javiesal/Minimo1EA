"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColectivoComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const colectivo_1 = require("../../models/colectivo");
let ColectivoComponent = class ColectivoComponent {
    constructor(resClinicoService) {
        this.resClinicoService = resClinicoService;
        this.idOfModified = '';
        this.specificResult = new colectivo_1.Colectivo();
        this.notificationModif = '';
        this.modificarFormulario = new forms_1.FormGroup({
            nombre: new forms_1.FormControl('', [forms_1.Validators.required]),
            descripcion: new forms_1.FormControl('', [forms_1.Validators.required]),
            vacuna: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    ngOnInit() {
    }
    getAllColectivos() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allColectivo = yield this.ColectivoService.getAllColectivos().toPromise();
        });
    }
    delColectivo() {
        return __awaiter(this, void 0, void 0, function* () {
            //PARSING ALL THE VALUES
            this.ColectivoToDel = new colectivo_1.Colectivo();
            console.log('Trying to modify result');
            let idDel = this.specificResult._id;
            console.log(idDel);
            this.ColectivoToDel._id = idDel;
            yield this.resClinicoService.delColectivo(this.ColectivoToDel._id).subscribe((data) => {
                console.log("data: ", data);
                this.notificationModif = 'Eliminado satisfactoriamente';
                this.getAllColectivos();
            }, (error) => {
                console.log("error: ", error);
                this.notificationModif = 'Error al eliminar';
            });
        });
    }
};
ColectivoComponent = __decorate([
    core_1.Component({
        selector: 'app-colectivo',
        templateUrl: './colectivo.component.html',
        styleUrls: ['./colectivo.component.css']
    })
], ColectivoComponent);
exports.ColectivoComponent = ColectivoComponent;
