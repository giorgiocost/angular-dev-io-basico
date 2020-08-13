import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient){}
  
  appRequest(request: any, id?: number): Observable<any> {
    if(request.method === 'GET'){
      console.log(request.op+'/'+id);
      if(id === undefined)
        return this.http.get<any[]>(request.op);
      return this.http.get<any[]>(request.op+'/'+id);
    }
  }

}
