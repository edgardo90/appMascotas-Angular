import { Inject, Injectable,PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  // unUser: string = '';
  // unPass: string = ''; 

  private apiUrl = '//localhost:8080/auth';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object

  ) { }

  inicioSesion(email: string, password: string): Observable<any> {
    const datos = { userName: email, password: password }; // Cambia "userName" si es necesario
    console.log(datos, "si funciona")
    return this.http.post(`${this.apiUrl}/login`, datos);
  }
  saveToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('authToken', token); // Save the token in LocalStorage
    }
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken'); // Retrieve the token using the correct key
    }
    return null; // Or some default value
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
    }
  }
  
  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
  
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
