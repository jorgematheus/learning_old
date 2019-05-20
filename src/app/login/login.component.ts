import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  
  constructor() { }

  ngOnInit() {  
    
  }

  public efetivarLogin(): void {
    console.log(this.form)

    let controls = this.form.controls;

    controls.email.markAsTouched();
    controls.senha.markAsTouched();      

    if(this.form.valid) {
      console.log('validado')      
    }
  }

}
