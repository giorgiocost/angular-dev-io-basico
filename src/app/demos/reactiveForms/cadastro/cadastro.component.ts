import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  MASKS = MASKS;

  usuario: Usuario;
  formResult = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // formGroup e FormControl
    
    // this.cadastroForm = new FormGroup({
    //   nome: new FormControl(''),
    //   cpf: new FormControl(''),
    //   email: new FormControl(''),
    //   senha: new FormControl(''),
    //   confirmarSenha: new FormControl(''),
    // });

    // valid password
    let senha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([8,15]),
    ]);

    let senhaConfirm = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([8,15]),
      CustomValidators.equalTo(senha)
    ]);

    // formBuilder
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      confirmarSenha: senhaConfirm
    });
  }

  adicionarUsuario() {
    // let x = this.cadastroForm.value;
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    this.formResult = JSON.stringify(this.cadastroForm.value);
  }

}
