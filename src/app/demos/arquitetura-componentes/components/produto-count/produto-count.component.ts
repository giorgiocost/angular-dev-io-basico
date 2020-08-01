import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';

@Component({
  selector: 'app-produto-count',
  template: `
    <div>
      <h3>Produtos</h3>
      <div>
        Produtos Ativos: {{ contadorAtivos() }} no total de {{ produtos?.length }} produtos. <br><br>
      </div>
    </div>
  `,
})
export class ProdutoCountComponent {

  @Input()
  produtos: Produto[];
  constructor() { }

  contadorAtivos(): number {
    if(!this.produtos) return;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }

}
