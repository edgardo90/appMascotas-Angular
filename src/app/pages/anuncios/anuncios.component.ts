import { Component } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [],
  templateUrl: './anuncios.component.html',
  styleUrl: './anuncios.component.css'
})
export class AnunciosComponent {

  constructor(
    public usuariosService: UsuariosService,
    public servicioMascotasService: ServicioMascotasService
  ) { }

  ngOnInit(): void {
    // this.usuariosService.verTodo().subscribe((data: any) => {
    //   console.log(data);
    // });


    this.servicioMascotasService.verPublicaciones().subscribe((data: any) => {
      console.log(data);
    });
  }

}
