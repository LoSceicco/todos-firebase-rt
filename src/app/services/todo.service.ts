import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private todoApi:TodoApiService,
  ) { }

  public todos: Todo[] = [];

  public addTodo(todo:string) {
    const newTodo = new Todo(todo);
    this.todoApi.createTodo(newTodo).subscribe((newId:string) => {
      newTodo.id = newId;
      this.todos.unshift(newTodo);
    })
    
  }

  setCompleted(todoId:string) {
    const todo = this.todos.find(td => td.id === todoId);
    if(todo && !todo.complete) {
      const todoUpdated = {
        ...todo,
        complete: true,
      };
      this.todoApi.updateTodo(todoUpdated)
        .subscribe((updated:Todo) => {
          todo.complete = updated && updated.complete;
        })
    }
  }

  getTodos():Observable<Todo[]> {
    return this.todoApi.getTodos()
      .pipe(
        tap(todos => this.todos = todos),
      )
  }
}
