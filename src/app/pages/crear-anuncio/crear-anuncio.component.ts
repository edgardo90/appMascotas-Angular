import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { UsuariosService } from '../../servicio/usuarios.service';
import { Publicacion } from '../../model/publicacion';
import { DropZoneImgAppComponent } from '../../img-drop/drop-zone-img-app/drop-zone-img-app.component';
import { url } from 'inspector';

@Component({
  selector: 'app-crear-anuncio',
  standalone: true,
  imports: [FormsModule,DropZoneImgAppComponent],  // Añade FormsModule a los imports
  templateUrl: './crear-anuncio.component.html',
  styleUrl: './crear-anuncio.component.css'
})
export class CrearAnuncioComponent {

  @ViewChild('dropZone') dropZoneImgAppComponent!: DropZoneImgAppComponent;


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
  
  async publicarAnuncio(){
    const urlImagen = await this.dropZoneImgAppComponent.subirImagen();
    const nuevoAnuncio : Publicacion = {
      nombre: this.publicacion.nombre,
      tipo: this.publicacion.tipo,
      raza: this.publicacion.raza,
      sexo: this.publicacion.sexo,
      tamanio: this.publicacion.tamanio,
      foto: urlImagen,
      zona: this.publicacion.zona,
      ubicacion: this.publicacion.ubicacion,
      fechaExtravio: this.publicacion.fechaExtravio,
      estado: this.publicacion.estado="extraviado",
      descripcion: this.publicacion.descripcion,
      contacto: this.publicacion.contacto
    }
    
    console.log(nuevoAnuncio)
    //this.dropZoneImgAppComponent.subirImagen();

    // enviar nuevoAnuncio a la base de datos
    alert('Anuncio publicado con éxito');
  
      this.navegar('/anuncios');
    
  }

  
}
