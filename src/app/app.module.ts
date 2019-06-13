import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SuiModule } from 'ng2-semantic-ui';
import { NgxPaginationModule } from 'ngx-pagination';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { ToastrModule } from 'ng6-toastr-notifications';

/* Serviços */
import { TestService } from './shared/test.service';


/* Angular Material  */
import {MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

import { ConteudoComponent } from './conteudos/conteudo/conteudo.component';
import { AulasComponent } from './conteudos/aulas/aulas.component';
import { CursosComponent } from './conteudos/cursos/cursos.component';
import { TurmasComponent } from './conteudos/turmas/turmas.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { UsuarioFormularioComponent } from './shared/usuario-formulario/usuario-formulario.component';
import { NotificacaoService } from './shared/notificacao.service';
import { ModalComponent } from './shared/modal/modal.component';
import { ListaConteudosComponent } from './conteudos/conteudo/lista-conteudos/lista-conteudos.component';
import { NovoConteudoComponent } from './conteudos/conteudo/novo-conteudo/novo-conteudo.component';
import { EditarConteudoComponent } from './conteudos/conteudo/editar-conteudo/editar-conteudo.component';
import { ListaAulasComponent } from './conteudos/aulas/lista-aulas/lista-aulas.component';
import { NovaAulaComponent } from './conteudos/aulas/nova-aula/nova-aula.component';
import { EditarAulaComponent } from './conteudos/aulas/editar-aula/editar-aula.component';
import { ListaCursosComponent } from './conteudos/cursos/lista-cursos/lista-cursos.component';
import { NovoCursoComponent } from './conteudos/cursos/novo-curso/novo-curso.component';
import { EditarCursoComponent } from './conteudos/cursos/editar-curso/editar-curso.component';
import { ListaTurmasComponent } from './conteudos/turmas/lista-turmas/lista-turmas.component';
import { NovaTurmaComponent } from './conteudos/turmas/nova-turma/nova-turma.component';
import { EditarTurmaComponent } from './conteudos/turmas/editar-turma/editar-turma.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
export let opcoesMask: Partial<IConfig> | (() => Partial<IConfig>);

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    UsuariosComponent,    
    BreadcrumbComponent, 
    NovoUsuarioComponent, 
    ListaUsuariosComponent, ConteudoComponent, AulasComponent, CursosComponent, TurmasComponent, EditarUsuarioComponent, UsuarioFormularioComponent, ModalComponent, ListaConteudosComponent, NovoConteudoComponent, EditarConteudoComponent, ListaAulasComponent, NovaAulaComponent, EditarAulaComponent, ListaCursosComponent, NovoCursoComponent, EditarCursoComponent, ListaTurmasComponent, NovaTurmaComponent, EditarTurmaComponent
      
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    ReactiveFormsModule,
    SuiModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatFormFieldModule,
    MatIconModule,
    MyDatePickerModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(opcoesMask)    
  ], 
  entryComponents: [ModalComponent],
  providers: [NotificacaoService, TestService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
