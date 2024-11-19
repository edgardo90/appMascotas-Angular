import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible globalmente
})
export class UsuariosService {
  private apiUrl = 'https://api.ejemplo.com/usuarios'; // Reemplaza con tu API

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
}
