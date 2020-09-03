import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any>;

  constructor(private tasksService: TasksService) {}

  ngOnInit() { 
    this.iniciados$ = this.tasksService.getToDoList$;
  }
}