import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent {

  constructor() {  }  
  
  
   validarFormulario(event) {         
    
    if(event != null) {
      console.log('form validado: ', event)
    }
        
  }

}
