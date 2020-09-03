import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TasksService { 
    url = 'http://localhost:3000/todolist';
    constructor(private http: HttpClient) { }

    getToDoList$: Observable<Task[]> = this.http.get<Task[]>(this.url);

    // getToDoList() : Observable<Task[]> {
    //     return this.http.get<Task[]>(this.url);
    // }
}