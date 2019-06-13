import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('modal') public modal;
  //@ViewChild('botao') public botao: ElementRef;  
  
  public form: FormGroup;

  constructor(private location: Location, private router: Router, private fb: FormBuilder) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit() { }

  //acesso facil aos controles do formulario
  get f() { return this.form.controls }

  public dismissed() {
    this.router.navigate(['/home'])
    
  }
  
  public efetivarLogin(): void {
    console.log(this.form)    

    this.f.email.markAsTouched();
    this.f.senha.markAsTouched();      

    if(this.form.valid) {
      console.log('validado');

      //removendo o modal (usando propiedade privada  apenas no ultimo caso)
      this.modal._element.nativeElement.remove();  
      this.router.navigate(['/home'])    
    }

    this.isVisible = false;
    console.log(this.isVisible)
  }

  ngOnDestroy() {  
    console.log()
    this.dismissed()

  } 

}
