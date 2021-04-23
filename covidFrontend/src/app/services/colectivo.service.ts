import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Rooturl} from './rooturl';
import { Observable } from 'rxjs';
import { Colectivo } from '../models/colectivo';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {
  rooturl: Rooturl;

  constructor(private http:HttpClient) {
    this.rooturl = new Rooturl();
   }
   getAllColectivos(): Observable<Colectivo[]>{
    return this.http.get<Colectivo[]>(`${this.rooturl.urlapp}/`);
   }
   addColectivo(Colectivo:Colectivo): Observable<any> { //añadir colectivo
    console.log("Añadiendo colectivo");
    let url = this.rooturl.urlapp;
    console.log(Colectivo);

    return this.http.post(url,Colectivo);
  }
  delColectivo(resClinico:Colectivo): Observable<any> { //eliminar colectivo
    console.log("Eliminando colectivo");
    console.log(resClinico);
    return this.http.post(`${this.rooturl.urlapp}/del`,Colectivo);
  }

}