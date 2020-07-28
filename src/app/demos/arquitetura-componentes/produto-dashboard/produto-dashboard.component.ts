import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutosService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: ['./produto-dashboard.component.css']
})
export class ProdutoDashboardComponent implements OnInit {

  produto: Produto[];
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.obterProdutos()
    .subscribe(prod => {
      this.produto = prod;
    })
  }

}
