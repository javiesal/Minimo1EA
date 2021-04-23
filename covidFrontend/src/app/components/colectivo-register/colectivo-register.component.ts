import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {ColectivoService} from '../../services/colectivo.service';
import {Colectivo} from '../../models/colectivo';

@Component({
  selector: 'app-colectivo-register',
  templateUrl: './colectivo-register.component.html',
  styleUrls: ['./colectivo-register.component.css']
})
export class ColectivoRegisterComponent implements OnInit {

  constructor(private resClinicoService : ColectivoService) { }
  ColectivoToAdd : Colectivo;
  notificationRegist : String = '';
  colectivoFormulario = new FormGroup({
    nombre : new FormControl('',[Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
    vacuna : new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }

  addColectivo(){
    this.ColectivoToAdd = new Colectivo();
    console.log('Intentando añadir colectivo')
   this.ColectivoToAdd.nombre = this.colectivoFormulario.controls['nombre'].value;
   this.ColectivoToAdd.descripcion = this.colectivoFormulario.controls['descripcion'].value;
   this.ColectivoToAdd.vacuna = this.colectivoFormulario.controls['vacuna'].value;
    this.ColectivoService.addColectivo(this.ColectivoToAdd).subscribe(
      (data) => {
        console.log("data: ", data);
        this.notificationRegist = 'Colectivo añadido';
      },
    (error) => {
        console.log("error: ", error);
        this.notificationRegist = 'No se ha podido añadir el colectivo';
    }
    );}
}
