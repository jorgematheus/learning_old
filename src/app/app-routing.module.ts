import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { ConteudoComponent } from './conteudos/conteudo/conteudo.component';
import { AulasComponent } from './conteudos/aulas/aulas.component';
import { CursosComponent } from './conteudos/cursos/cursos.component';
import { TurmasComponent } from './conteudos/turmas/turmas.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';




const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsuariosComponent,
    children: [
      { path: '', component: ListaUsuariosComponent },     
      { path: 'new', component: NovoUsuarioComponent },
      { path: 'edit/:id', component:  EditarUsuarioComponent }
    ]  
  },
  { path: 'contents', component: ConteudoComponent },
  { path: 'lessons', component: AulasComponent },
  { path: 'courses', component: CursosComponent },
  { path: 'classes', component: TurmasComponent },

  
  //{ path: '**', redirectTo: '/home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
