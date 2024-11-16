import {Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [BrowserModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formularioRegistro:FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private servicioMascotas: ServicioMascotasService
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      telefono:[''],
      direccion: [''],
      email: [''],
      password: ['']
     
    });
  }

  // funcion para navegar a otra pagina
  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
    console.log(direccion);
  }

  // funcion para enviar el formulario al backend
  EnviarFormulario(){
   
    this.servicioMascotas.enviarDatos(this.formularioRegistro.value).subscribe(
      (respuesta) => {
        console.log("datos enviado correctamente", respuesta);
      },
      error => {
        console.error("error al enviar datos", error);}
    )
  }
  
}
