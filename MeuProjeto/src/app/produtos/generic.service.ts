import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  // protected op = "http://localhost:3000/produtos";
  constructor(private http: HttpClient){}
  
  appRequest(request: any): Observable<any> {
    if(request.method === 'GET'){
      return this.http.get<any[]>(request.op);
    }
  }

  // obterProdutos(): Observable<Produto[]> {
    
  // }
}
