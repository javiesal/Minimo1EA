"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const colectivo_service_1 = require("./colectivo.service");
describe('ColectivoService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(colectivo_service_1.ColectivoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
