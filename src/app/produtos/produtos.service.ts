import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { GenericService } from './generic.service';
import { op } from '../operacao/OpKey';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
    console.log(request.op);

    return this.genericService.appRequest(request);
  }

  obterProdutoPorId(id: any): Observable<Produto> {
    const request: any = {
      op: op('produtos'),
      method: 'GET'
    }
    console.log(request);

    return this.genericService.appRequest(request,id);
  }

}
