import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {ColectivoService} from '../../services/colectivo.service';
import {Colectivo} from '../../models/colectivo';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-colectivo',
  templateUrl: './colectivo.component.html',
  styleUrls: ['./colectivo.component.css']
})
export class ColectivoComponent implements OnInit {

  constructor(private resClinicoService : ColectivoService) { }
 
  public idOfModified :String = '';
  public allColectivo : Colectivo[];
  public specificResult = new Colectivo ();
  ColectivoToDel : Colectivo;
  notificationModif : String = '';
  modificarFormulario = new FormGroup({
    nombre : new FormControl('',[Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
    vacuna : new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }

  async getAllColectivos(){
    this.allColectivo = await this.ColectivoService.getAllColectivos().toPromise();
  }

  async delColectivo(){
    //PARSING ALL THE VALUES
    this.ColectivoToDel = new Colectivo();
    console.log('Trying to modify result')
    
   let idDel = this.specificResult._id;
   console.log(idDel);
   this.ColectivoToDel._id = idDel; 
    await this.resClinicoService.delColectivo(this.ColectivoToDel._id).subscribe(
      (data) => {
        console.log("data: ", data);
        this.notificationModif = 'Eliminado satisfactoriamente';
        this.getAllColectivos();
      },
    (error) => {
        console.log("error: ", error);
        this.notificationModif = 'Error al eliminar';
    }
    );}

}
