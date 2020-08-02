import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.css']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(){
    console.log(this.status)
    this.status.emit(this.produto);
  }

}
