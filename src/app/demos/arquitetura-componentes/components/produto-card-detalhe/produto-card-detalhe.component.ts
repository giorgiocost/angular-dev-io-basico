import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.css']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
