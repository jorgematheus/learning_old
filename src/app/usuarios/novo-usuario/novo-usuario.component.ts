import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
  
})
export class NovoUsuarioComponent implements OnInit {

    public myDatePickerOptions: IMyDpOptions = {
    // other options...
    showTodayBtn: false,   
    dateFormat: 'dd/mm/yyyy'
    
};
public model: any = { date: { year: 2018, month: 10, day: 9 } };


  public formNovoUsuario = new FormGroup({
    foto: new FormControl(null),
    nome: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    celular: new FormControl(null),
    dataNascimento: new FormControl(null, [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    confirmarSenha: new FormControl('', {  
      updateOn: 'blur',
      validators: [Validators.required]
    }),
    tipoUsuario: new FormControl(null, [Validators.required])
  });

  public imageSrc; 
  public filteredOptions = [ 'opção 1', 'opção2', 'opção3' ]

  constructor() {  }

  ngOnInit() {
    
  }
 
  public senhasIguais(): boolean {
    let form = this.formNovoUsuario,
        senha = form.get('senha').value,
        confirmarSenha = form.get('confirmarSenha').value;

       

    return senha == confirmarSenha ? true : false;    

  } 
  

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }


  public validarFormulario(): void {
    console.log(this.formNovoUsuario)
    let form = this.formNovoUsuario;    
    form.get('nome').markAsTouched();
    form.get('email').markAsTouched();    
    form.get('senha').markAsTouched();
    form.get('confirmarSenha').markAsTouched();
    form.get('tipoUsuario').markAsTouched();

    let usuario: Usuario = new Usuario(      
      form.value.foto,
      form.value.nome,
      form.value.email,
      form.value.celular,
      form.value.dataNascimento,
      form.value.senha,
      form.value.tipoUsuario      
    )
    
    console.log(usuario)
    if(this.senhasIguais()) {
      console.log('senhas iguais: ', this.senhasIguais())
    } else {
      console.log('senhas diferentes: ', this.senhasIguais())
    }
  }

}
