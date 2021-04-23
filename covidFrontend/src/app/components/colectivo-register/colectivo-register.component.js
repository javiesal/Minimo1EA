"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColectivoRegisterComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const colectivo_1 = require("../../models/colectivo");
let ColectivoRegisterComponent = class ColectivoRegisterComponent {
    constructor(resClinicoService) {
        this.resClinicoService = resClinicoService;
        this.notificationRegist = '';
        this.colectivoFormulario = new forms_1.FormGroup({
            nombre: new forms_1.FormControl('', [forms_1.Validators.required]),
            descripcion: new forms_1.FormControl('', [forms_1.Validators.required]),
            vacuna: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    ngOnInit() {
    }
    addColectivo() {
        this.ColectivoToAdd = new colectivo_1.Colectivo();
        console.log('Intentando añadir colectivo');
        this.ColectivoToAdd.nombre = this.colectivoFormulario.controls['nombre'].value;
        this.ColectivoToAdd.descripcion = this.colectivoFormulario.controls['descripcion'].value;
        this.ColectivoToAdd.vacuna = this.colectivoFormulario.controls['vacuna'].value;
        this.ColectivoService.addColectivo(this.ColectivoToAdd).subscribe((data) => {
            console.log("data: ", data);
            this.notificationRegist = 'Colectivo añadido';
        }, (error) => {
            console.log("error: ", error);
            this.notificationRegist = 'No se ha podido añadir el colectivo';
        });
    }
};
ColectivoRegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-colectivo-register',
        templateUrl: './colectivo-register.component.html',
        styleUrls: ['./colectivo-register.component.css']
    })
], ColectivoRegisterComponent);
exports.ColectivoRegisterComponent = ColectivoRegisterComponent;
