import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioMascotasService {
  // url de la api que nos tiene que pasar edgar desde backend
  private url = 'http://localhost:3000/usuarios';
  private url2 = 'http://localhost:3000/anuncios';


  constructor(
    private http: HttpClient,
    private httpclient:HttpClientModule

  ) { }

  enviarDatos(datos : any): Observable<any>{
    return this.http.post(this.url, datos);
  }

  enviarAnuncio(datos : any): Observable<any>{
    return this.http.post(this.url2, datos);
  }
}
