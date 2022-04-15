import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoService:TodoService,
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe((todos:Todo[]) => this.todos = todos);
  }

  public todos:Todo[] = [];
  completeTodo(todoId:string) {
    this.todoService.setCompleted(todoId);
  }
}
