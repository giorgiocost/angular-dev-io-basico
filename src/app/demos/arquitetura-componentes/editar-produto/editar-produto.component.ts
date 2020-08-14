import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos/produtos.service';
import { Produto } from 'src/app/produtos/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(private router: ActivatedRoute, private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.produtosService.obterProdutoPorId(params['id']).subscribe(data => {
        this.produto = data;
      });
    });
  }

}
