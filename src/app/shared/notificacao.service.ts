import { ToastrManager, Toastr } from 'ng6-toastr-notifications';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificacaoService {
  
    //configuração padrão de exibição das notificações
    //https://www.npmjs.com/package/ng6-toastr-notifications

    private config = { position: 'bottom-right', animate: 'slideFromRight', toastTimeout: 5000 };

    constructor(private toastr: ToastrManager) {}

    public showSuccess(titulo: string, texto: string, config: Object = this.config): void {        
        this.toastr.successToastr(texto, titulo, config)        
    }

    public showError(titulo: string, texto: string, config: Object = this.config): void {        
        this.toastr.errorToastr(texto, titulo, config)
    }

    public showInformation(titulo: string, texto: string, config: Object = this.config): void {        
        this.toastr.infoToastr(texto, titulo, config);
    }

    public showWarning(titulo: string, texto: string, config: Object = this.config): void {        
        this.toastr.warningToastr(texto, titulo, config);
    }

    public dismiss(toast: Toastr) {
        this.toastr.dismissToastr(toast);
    }

    public dismissAll(): void {
        this.toastr.dismissAllToastr()        
    }
}