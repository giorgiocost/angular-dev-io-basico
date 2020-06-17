import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

 public contadorClique = 10;
 public urlImagem = "https://angular.io/assets/images/logos/angular/angular.svg";
 public nome: string;

 public AdicionarClick() {
  this.contadorClique++;
 }

 zerarContador() {
  this.contadorClique = 0;
 }

//  KeyUp(event: { target: HTMLInputElement }): string{
//   return this.nome = event.target.value;
//  }
}
