import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../task";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: Task[];

  @Output()
  toggle = new EventEmitter< any>();

  toggleItem(index: number, acao: string ) {
    const task = this.list[index];
    console.log(task);
  }
}