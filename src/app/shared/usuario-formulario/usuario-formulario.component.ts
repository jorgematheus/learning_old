import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss']
})
export class UsuarioFormularioComponent implements OnInit {

  public formUsuario: FormGroup; 
  public imageSrc; 
  @Output() dadosUsuario: EventEmitter<Usuario> = new EventEmitter();

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
    this.formUsuario = this.fb.group({
      foto: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      celular: [''],
      dataNascimento: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['', [Validators.required]]
    })
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }

  //acesso facil aos inputs do formulário para validação
  get f() { return this.formUsuario.controls }

    validarForm() {
      this.f.nome.markAsTouched();
      this.f.email.markAsTouched();
      this.f.dataNascimento.markAsTouched();
      this.f.senha.markAsTouched();
      this.f.confirmarSenha.markAsTouched();
      this.f.tipoUsuario.markAsTouched();

      console.log(this.formUsuario)

      let usuario: Usuario = {
        foto: this.imageSrc,
        nome: this.f.nome.value,
        email: this.f.email.value,
        celular: this.f.celular.value,
        dataNascimento: this.f.dataNascimento.value,
        senha: this.f.senha.value,
        tipoUsuario: this.f.tipoUsuario.value
      }

      if(this.formUsuario.valid) {        
        this.dadosUsuario.emit(usuario);
        return;
      } 

      this.dadosUsuario.emit(null)
      
    }

}
