import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos/produtos.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
})
export class ContatoComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.obterProdutos()
    .pipe(
      tap(data => console.log('tap ',data)),
    )
    .subscribe(data => console.log(data));
  }

}
