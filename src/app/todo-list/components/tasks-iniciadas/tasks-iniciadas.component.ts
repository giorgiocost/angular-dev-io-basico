import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  constructor(private tasksService: TasksService) {}

  ngOnInit() { }
}