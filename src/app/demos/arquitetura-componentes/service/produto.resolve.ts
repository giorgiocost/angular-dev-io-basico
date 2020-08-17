import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Produto } from 'src/app/produtos/produto';
import { ProdutosService } from 'src/app/produtos/produtos.service';

@Injectable()
export class ProdutoResolve implements Resolve< Produto[]> {
    constructor(private produtosService: ProdutosService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtosService.obterTodos(route.params.estado);
    }
}