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
  toggle = new EventEmitter<any>();

  toggleItem(index: number, acao: string) {
    const task = this.list[index];

    switch (acao) {
      case 'iniciado':
        console.log(acao);
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'finalizar':
        console.log(acao);
        task.finalizado = true;
        task.iniciado = false;
        break;
      case 'retomar':
        console.log(acao);
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'cancelar':
        console.log(acao);
        task.finalizado = false;
        task.iniciado = false;
        break;
    }

    this.toggle.emit({
      task: { ...task}
    });
  }
}