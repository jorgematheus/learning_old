import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('modal') public modal;

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  
  route: string;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {  
    
  }

  ngOnDestroy() {
    //this.modal.dismissed()
  }


  public efetivarLogin(): void {
    console.log(this.form)

    let controls = this.form.controls;

    controls.email.markAsTouched();
    controls.senha.markAsTouched();      

    if(this.form.valid) {
      console.log('validado')      
    }     

    this.router.navigate(['/home'])

  }

}
