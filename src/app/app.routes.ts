import { Routes } from '@angular/router';
// importar todos los componentes que se van a usar en las rutas
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { RegistroComponent } from './pages/registro/registro.component';



export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'anuncios', component: AnunciosComponent},
    {path: 'registro' , component: RegistroComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
