import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  constructor(private router: ActivatedRoute, private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.produtosService.obterProdutoPorId(params['id']).subscribe(_ => console.log('produto'))
    });
    
  }

}
