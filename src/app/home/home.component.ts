import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from '../shared/notificacao.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {

  constructor(private notficacao: NotificacaoService) { }

  ngOnInit() {
    //this.notficacao.dismissAll()
    console.log('not destruida: ')
    this.notficacao.showWarning('Cuidado!', 'Teste de mensagem de aviso!')
  }

}
