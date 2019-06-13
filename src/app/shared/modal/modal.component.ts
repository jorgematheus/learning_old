import { Component } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';

interface IConfirmModalContext {
  title:string;
  question:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'  
})

export class ModalComponent {   
  
  constructor(public modal:SuiModal<IConfirmModalContext, void, void>) { }      
}

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
  
  constructor(title:string, question:string, size = ModalSize.Mini) {
      super(ModalComponent, { title, question } );          

      this.isClosable = true;
      this.transitionDuration = 200;
      this.size = size;
  }
}
