import { Observable, Subject } from 'rxjs';

export class TestService {

    id: Observable<any>;
    private idUsuarioSubject: Subject<any> = new Subject();
  
    constructor() {
      this.id = this.idUsuarioSubject.asObservable();
    }
  
    public idUsuario(id) {
      this.idUsuarioSubject.next(id);
    }     

 }
