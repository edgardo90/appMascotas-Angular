import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-anuncio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './crear-anuncio.component.html',
  styleUrl: './crear-anuncio.component.css'
})
export class CrearAnuncioComponent {
  formularioAnuncio:FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private servicioMascotas: ServicioMascotasService,
    private http: HttpClient) {
      this.formularioAnuncio = this.formBuilder.group({
        nombre: [''],
        tipo: [''],
        raza:[''],
        sexo: [''],
        tamanio: [''],
        foto: [''],
        descripcion: [''],
        fecha: [''],
        estado: [''],
        ubicacion: [''],
        direccion: [''],
        contacto: [''],
       
      });
    }

  redirectToLogin() {
    this.router.navigate(['/crear-anuncio']);
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
    console.log(direccion);
  }
  
  enviarAnuncio(){
    this.servicioMascotas.enviarAnuncio(this.formularioAnuncio.value).subscribe(
      (respuesta) => {
        console.log("datos enviado correctamente", respuesta);
      },
      error => {
        console.error("error al enviar datos", error);}
    )
  }
  
}
