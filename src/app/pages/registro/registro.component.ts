import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
//import { DropZoneImgAppComponent } from '../../img-drop/drop-zone-img-app/drop-zone-img-app.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa FormsModule y ReactiveFormsModule
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],  // Añade FormsModule a los imports
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  // Corregido "styleUrl" por "styleUrls"
})
export class RegistroComponent {

  // usa la interfaz Usuario
  usuario:Usuario = {
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,

  ) {}

   navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
   }
 

  registrar(){

    const nuevoUsuario : Usuario = {
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      telefono: this.usuario.telefono,
      direccion: this.usuario.direccion,
      email: this.usuario.email,
      password: this.usuario.password
   
    }
    console.log(nuevoUsuario)
    alert('Usuario registrado con éxito');
      this.navegar('login');
  }
}
