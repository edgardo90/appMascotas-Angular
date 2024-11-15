import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-anuncio',
  standalone: true,
  imports: [],
  templateUrl: './crear-anuncio.component.html',
  styleUrl: './crear-anuncio.component.css'
})
export class CrearAnuncioComponent {
  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/crear-anuncio']);
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
    console.log(direccion);
  }
  
}
