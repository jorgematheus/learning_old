import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//Usuários
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

//Conteúdo
import { ConteudoComponent } from './conteudos/conteudo/conteudo.component';
import { ListaConteudosComponent } from './conteudos/conteudo/lista-conteudos/lista-conteudos.component';
import { NovoConteudoComponent } from './conteudos/conteudo/novo-conteudo/novo-conteudo.component';
import { EditarConteudoComponent } from './conteudos/conteudo/editar-conteudo/editar-conteudo.component';

//Aulas
import { AulasComponent } from './conteudos/aulas/aulas.component';
import { ListaAulasComponent } from './conteudos/aulas/lista-aulas/lista-aulas.component';
import { NovaAulaComponent } from './conteudos/aulas/nova-aula/nova-aula.component';
import { EditarAulaComponent } from './conteudos/aulas/editar-aula/editar-aula.component';

//Cursos
import { CursosComponent } from './conteudos/cursos/cursos.component';
import { ListaCursosComponent } from './conteudos/cursos/lista-cursos/lista-cursos.component';
import { NovoCursoComponent } from './conteudos/cursos/novo-curso/novo-curso.component';
import { EditarCursoComponent } from './conteudos/cursos/editar-curso/editar-curso.component';

//Turmas
import { TurmasComponent } from './conteudos/turmas/turmas.component';
import { ListaTurmasComponent } from './conteudos/turmas/lista-turmas/lista-turmas.component';
import { NovaTurmaComponent } from './conteudos/turmas/nova-turma/nova-turma.component';
import { EditarTurmaComponent } from './conteudos/turmas/editar-turma/editar-turma.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsuariosComponent,
    children: [
      { path: '', component: ListaUsuariosComponent },     
      { path: 'new', component: NovoUsuarioComponent },
      { path: 'edit/:id', component:  EditarUsuarioComponent }
    ]  
  },
  { path: 'contents', component: ConteudoComponent, 
    children: [
      { path: '', component: ListaConteudosComponent },
      { path: 'new', component: NovoConteudoComponent },
      { path: 'edit/:id', component: EditarConteudoComponent }
    ] 
  },
  { path: 'lessons', component: AulasComponent,
    children: [
      { path: '', component: ListaAulasComponent },
      { path: 'new', component: NovaAulaComponent },
      { path: 'edit/:id', component: EditarAulaComponent }
    ]
  },
  { path: 'courses', component: CursosComponent,
    children: [
      { path: '', component: ListaCursosComponent },
      { path: 'new', component: NovoCursoComponent },
      { path: 'edit/:id', component: EditarCursoComponent }
    ]
  },
  { path: 'classes', component: TurmasComponent,
    children: [
      { path: '', component: ListaTurmasComponent },
      { path: 'new', component: NovaTurmaComponent },
      { path: 'edit/:id', component: EditarTurmaComponent }
    ]
  },

  
  //{ path: '**', redirectTo: '/home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
