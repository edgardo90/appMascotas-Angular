import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';
import { CommonModule } from '@angular/common';
import { AuthLoginService } from '../../servicio/auth-login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
})
export class AnunciosComponent implements OnInit {
  publicaciones: any[] = [];
  publicacionesFiltradas: any[] = [];
  mostrarModal: boolean = false;
  publicacionSeleccionada: any = null;

  filtro: { [key: string]: string } = {
    sizePet: '',
    race: '',
    district: '',
  };

  constructor(
    private usuariosService: UsuariosService,
    private servicioMascotasService: ServicioMascotasService,
    private router: Router,
    public authService: AuthLoginService
  ) {}

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    this.servicioMascotasService.verPublicaciones().subscribe({
      next: (response: any) => {
        console.log('Publicaciones obtenidas:', response);
        this.publicaciones = response.data || []; // Extraer publicaciones desde la respuesta
        this.publicacionesFiltradas = [...this.publicaciones]; // Copia inicial para los filtros
      },
      error: (error: any) => {
        console.error('Error al obtener publicaciones:', error);
      },
    });
  }

  // Modal
  abrirModal(publicacion: any): void {
    this.publicacionSeleccionada = publicacion;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.publicacionSeleccionada = null;
  }

  // Navegación
  navegar(direccion: string): void {
    this.router.navigate([direccion]);
  }

 // Filtros
 actualizarFiltro(campo: string, evento: Event): void {
  const valor = (evento.target as HTMLInputElement).value || ''; // Accede correctamente al valor
  this.filtro[campo] = valor;
  this.aplicarFiltros(); // Aplica el filtro inmediatamente después de la actualización
}

aplicarFiltros(): void {
  console.log('Filtros aplicados:', this.filtro); // Verifica los valores de los filtros
  this.publicacionesFiltradas = this.publicaciones.filter((publicacion) => {
    const filtroTamaño = this.filtro["sizePet"]
      ? publicacion.sizePet === this.filtro["sizePet"]
      : true;
    const filtroRaza = this.filtro["race"]
      ? publicacion.race?.toLowerCase().includes(this.filtro["race"].toLowerCase())
      : true;
    const filtroDistrito = this.filtro["district"]
      ? publicacion.district?.toLowerCase().includes(this.filtro["district"].toLowerCase())
      : true;

    return filtroTamaño && filtroRaza && filtroDistrito;
  });
  console.log('Publicaciones filtradas:', this.publicacionesFiltradas); // Verifica las publicaciones filtradas
}

}
