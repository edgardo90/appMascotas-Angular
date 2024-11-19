import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  
  constructor(private router: Router) {}

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  login(email: string, password: string) {
    console.log(email,password);
    if(email == 'jj@gmail.com' && password == '123456'){
      
      alert('Usuario logueado con éxito');
      this.navegar('home');
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }
  
}
