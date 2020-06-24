import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { GenericService } from './generic.service';
import { op } from '../operacao/OpKey';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private genericService: GenericService){}

  obterProdutos(): Observable<Produto[]> {
    const request: any = {
      op: op('produtos'),
      method: 'GET'
    }

    return this.genericService.appRequest(request);
  }
}
