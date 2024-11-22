import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  publicaciones: any[] = []; // Inicializa la lista de publicaciones

  constructor(
    private usuariosService: UsuariosService,
    private servicioMascotasService: ServicioMascotasService
  ) {}

  ngOnInit(): void {
    this.servicioMascotasService.verPublicaciones().subscribe({
      next: (response: any) => {
        console.log('Publicaciones obtenidas:', response);
        this.publicaciones = response.data || []; // Extraer el array de publicaciones

      },
      error: (error: any) => {
        console.error('Error al obtener publicaciones:', error);
      }
    });
  }
}
