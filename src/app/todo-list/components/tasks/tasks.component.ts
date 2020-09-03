import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  
  todolist$: Observable<any>;

  constructor(private tasksService: TasksService) {}

  ngOnInit() { 
    this.todolist$ = this.tasksService.getToDoList$;
  }  
}