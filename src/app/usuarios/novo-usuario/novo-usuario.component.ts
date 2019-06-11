import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
  
})
export class NovoUsuarioComponent implements OnInit {

  public titulo:string = 'Novo Usuário'
  
   constructor() {}

  ngOnInit() {   }

  validarFormulario(event) {    
    if(event != null) {
      console.log('form validado: ', event)
    }        
 }

}
