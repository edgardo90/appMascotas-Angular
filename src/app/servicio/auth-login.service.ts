import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  // unUser: string = '';
  // unPass: string = ''; 

  private apiUrl = '//localhost:8080/auth';

  constructor(
    private http: HttpClient,
  ) { }

  inicioSesion(email: string, password: string): Observable<any> {
    const datos = { userName: email, password: password }; // Cambia "userName" si es necesario
    console.log(datos, "si funciona")
    return this.http.post(`${this.apiUrl}/login`, datos);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token); // Guarda el token en LocalStorage
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Recupera el token desde LocalStorage
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Elimina el token
  }
}
