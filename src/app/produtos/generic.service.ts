import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient){}
  
  appRequest(request: any): Observable<any> {
    if(request.method === 'GET'){
      console.log(request.op);
      return this.http.get<any[]>(request.op);
    }
  }

}
