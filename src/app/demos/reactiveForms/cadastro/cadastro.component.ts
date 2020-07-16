import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  usuario: Usuario;

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

    // formBuilder
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmarSenha: ['']
    });
  }

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
