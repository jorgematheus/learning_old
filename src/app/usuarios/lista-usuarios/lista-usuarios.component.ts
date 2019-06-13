import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild, ElementRef, Inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { TestService } from '../../shared/test.service';
import { Subscription } from 'rxjs';
import { NotificacaoService } from '../../shared/notificacao.service';
import { URL } from '../../shared/url';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']  
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {  

  @Output() public excluirUsuario: EventEmitter<Object> = new EventEmitter();

  private subscriptions: Subscription = new Subscription();

  public users: Usuario;
  public url = URL;
  public elementDelete;
  public idUsuario: number;
  public p = null;

  collection = [];
  constructor(private testService: TestService, private notificacao: NotificacaoService) {
    for (let i = 1; i <= 100; i++) {

      this.users = {
        id: i,
        foto: '',
        nome: `Jorge ${i}`,
        email: `jorge.teste${i}@teste.com`,
        celular:'(11) 95555-5555',
        dataNascimento: '14/05/1999',
        tipoUsuario: '<b>Administrador</b>'
      }      
      this.collection.push(this.users)      
    }    
  } 

  ngOnInit() {      
    this.subscriptions.add(this.testService.id.subscribe( (id: number) => {
      console.log('Id do usuario excluido: ', id)      
      this.notificacao.showSuccess('Sucesso!', 'Usuário Excluído!');  
      //this.elementDelete.remove();

      //removendo o elemento do array para atualizar a paginação      

      //pegando o usuário que possuir o mesmo id capturado pelo botão de excluir
       let usuarioDelete = this.collection.find((user) => user.id == this.idUsuario);       

       if(usuarioDelete) {
         this.collection.splice(this.collection.indexOf(usuarioDelete), 1)
       }
      
      //servico para remover usuário...
      
    }))    
  }
  

  public excluir(id: number, name: string) {    
    let user = { id: id,  name: name }
    this.excluirUsuario.emit(user);  
    this.idUsuario = id;    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();    
  }

  
}
