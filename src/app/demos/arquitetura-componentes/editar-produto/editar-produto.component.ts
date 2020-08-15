import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/produtos/produtos.service';
import { Produto } from 'src/app/produtos/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
      private route: ActivatedRoute, 
      private produtosService: ProdutosService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produtosService.obterProdutoPorId(params['id']).subscribe(data => {
        this.produto = data;
      });
    });
  }

  salvar() {
    this.router.navigate(['/produtos']);
  }

}
