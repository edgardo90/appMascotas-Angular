import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// se injecta el router para poder navegar entre las rutas
  constructor( private router:Router) { 
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
      console.log(e);
      switch(e.urlAfterRedirects){
        case "/home":
          this.seleccionado = [true,false,false];
          break;
        case "/anuncios":
          this.seleccionado = [false,true,false];
          break;
          case "/nosotros":
          this.seleccionado = [false,false,true];
          break;
          default:
          this.seleccionado = [false,false,false];
          break;
      }}
  })}

  navegar(direccion :string){
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
    console.log(direccion);
  }

  seleccionado = [false,false,false]
}
