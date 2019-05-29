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


/* Angular Material  */
import {MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

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
    ListaUsuariosComponent    
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
     MatFormFieldModule ,
     MatIconModule,
     MyDatePickerModule
    
  ], 
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
