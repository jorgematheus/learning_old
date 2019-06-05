import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { TestService } from '../../shared/test.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  
  @ViewChild('1') public one_;

  @Output() public excluirUsuario: EventEmitter<Object> = new EventEmitter();

  private subscriptions: Subscription = new Subscription();

  public users: Usuario;

  collection = [];
  constructor(private testService: TestService) {
    for (let i = 1; i <= 100; i++) {
      //this.collection.push(`item ${i}`);
      this.collection.push({id: i, nome: `Usuário ${i}`})
      
    }    
  }

  ngOnInit() {
    //console.log(this.one_)
  
    this.subscriptions.add(this.testService.id.subscribe( (id: number) => {
      //console.log('Id do usuario excluido: ', id)
    }))

    this.users = {
      id: 2,
      name: 'Stevie Feliciano',
      description: `Stevie Feliciano is a <a>library scientist</a>
      living in New York City. She likes to spend her time reading, 
      running, and writing.`
    }
  }


  public excluir(id: number, name: string) {
    console.log('id excluido: ', id, 'nome excluido: ', name)
    let user = { 
      id: id,
      name: name
    }
    this.excluirUsuario.emit(user);
  }

  
}
