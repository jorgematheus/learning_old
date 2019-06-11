import { Component, OnInit } from '@angular/core';
import { SuiModalService, ModalSize } from 'ng2-semantic-ui';
import { ConfirmModal } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {  

  constructor(public modalService: SuiModalService) { }  

  ngOnInit() { }


  abrir() {    
    this.modalService
    .open(new ConfirmModal("Are you sure?", "Are you sure about accepting this?"))
    .onApprove(() => alert("User has accepted."))
    .onDeny(() => alert("User has denied."));
  }  
  
}
