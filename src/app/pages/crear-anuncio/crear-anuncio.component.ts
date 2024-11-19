import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { UsuariosService } from '../../servicio/usuarios.service';
import { Publicacion } from '../../model/publicacion';

@Component({
  selector: 'app-crear-anuncio',
  standalone: true,
  imports: [FormsModule],  // Añade FormsModule a los imports
  templateUrl: './crear-anuncio.component.html',
  styleUrl: './crear-anuncio.component.css'
})
export class CrearAnuncioComponent {

  publicacion :Publicacion = {
    nombre: '',
    tipo: '',
    raza: '',
    sexo: '',
    tamanio: '',
    foto: '',
    zona: '',
    ubicacion: '',
    fechaExtravio: '',
    estado: '',
    descripcion: '', 
    contacto: ''
  }

  constructor(
    private router: Router,
  ) {}

  redirectToLogin() {
    this.router.navigate(['/crear-anuncio']);
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
  publicarAnuncio(){
    const nuevoAnuncio : Publicacion = {
      nombre: this.publicacion.nombre,
      tipo: this.publicacion.tipo,
      raza: this.publicacion.raza,
      sexo: this.publicacion.sexo,
      tamanio: this.publicacion.tamanio,
      foto: this.publicacion.foto,
      zona: this.publicacion.zona,
      ubicacion: this.publicacion.ubicacion,
      fechaExtravio: this.publicacion.fechaExtravio,
      estado: this.publicacion.estado="extraviado",
      descripcion: this.publicacion.descripcion,
      contacto: this.publicacion.contacto
    }
    console.log(nuevoAnuncio)
    // enviar nuevoAnuncio a la base de datos
    alert('Anuncio publicado con éxito');
    setInterval(() => {
      this.navegar('/anuncios');
    }, 2000);
  }

  
}
