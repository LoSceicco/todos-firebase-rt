import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.css']
})
export class AddBarComponent implements OnInit {

  constructor(
    private todoService:TodoService,
  ) { }

  ngOnInit(): void {
  }

  public todo:string = '';

  submitHandler() {
    this.todoService.addTodo(this.todo);
    this.todo = '';
  }
}
