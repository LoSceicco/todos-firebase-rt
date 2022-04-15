import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(
    private http:HttpClient,
  ) { }

  private url:string = `${environment.apiUrl}/todos.json`;

  private convertFromTodo(todo:Todo):any {
    if(!todo.id) {
      return {}
    }
    const converted:any = {};
    converted[todo.id] = {
      complete: todo.complete,
      todo: todo.todo,
    }
    return converted;
  }

  private convertInTodos(firebaseObject:any):Todo[] {
    const todos:Todo[] = [];
    for(const id in firebaseObject) {
      const { complete, todo } = firebaseObject[id];
      const td = new Todo(todo);
      td.complete = complete;
      td.id = id;
      todos.push(td);
    }
    return todos;
  }

  public createTodo(todo:Todo): Observable<string> {
    return this.http.post(
      this.url,
      todo
    ).pipe(
      map((response:any) => {
        const { name } = response;
        return name;
      })
    )
  }

  public updateTodo(todoUpdated:Todo):Observable<Todo> {
    const body = this.convertFromTodo(todoUpdated);
    return this.http.patch(
      this.url,
      body,
    ).pipe(
      map((res:any) => {
        const [first] = this.convertInTodos(res);
        return first;
      })
    )
  }

  public getTodos(): Observable<Todo[]> {
    console.log('calling get..')
    return this.http.get(this.url)
      .pipe(
        map((result:any) => this.convertInTodos(result)),
        tap(() => console.log('get finishd'))
      )
  }
}
