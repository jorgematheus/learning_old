import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Observer } from 'rxjs';
import { ModalTemplate, SuiModal, SuiModalService, TemplateModalConfig, ModalSize } from 'ng2-semantic-ui';
import { TestService } from '../shared/test.service';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {  
  @ViewChild('modalTemplate') 
  public modalTemplate: ModalTemplate<IContext, string, string>
  public route: string;
  
  //variáveis para recuperar dados do usuário a ser excluído
  public id: number;
  public name: string;
 
  constructor(private location: Location, 
    router: Router, 
    public modalService: SuiModalService,
    public testService: TestService,
    public activate: ActivatedRoute) {
    router.events.subscribe((val) => {
      //pega a rota ativa no momento
      this.route = this.location.path();       
    })   
    
  }

  ngOnInit() {    
  }
  
  public openModal(conteudoDinamico: string = `Deseja realmente excluir o usuário ${this.name} ?`) {
    
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate)
   
    config.size = 'mini'; 
    config.context = { data: conteudoDinamico };

    this.modalService
        .open(config)
        .onApprove(result => {  
          this.testService.idUsuario(this.id)           
        })
        .onDeny(result => { console.log(result) })      

  } 

  //captura  o componente ativo no router-outlet
  onActivate(componentReference) {
     console.log('Componente de referencia: ', componentReference)     
     if(componentReference.excluirUsuario) {
       componentReference.excluirUsuario.subscribe((data) => {         
         this.id = data.id;
         this.name = data.name;         
         this.openModal();         
       })
      }
  }
 

  



}
