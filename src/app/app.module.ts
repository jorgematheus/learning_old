import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    UsuariosComponent,    
    BreadcrumbComponent, NovoUsuarioComponent, ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SuiModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
