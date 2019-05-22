import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsuariosComponent,
    children: [
      { path: '', component: ListaUsuariosComponent },     
      { path: 'new', component: NovoUsuarioComponent }
    ]  
  },
  { path: '**', redirectTo: '/home' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
