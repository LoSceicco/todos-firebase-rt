import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todo?:Todo;
  @Output() completeClicked:EventEmitter<string> = new EventEmitter();

  public completeHandler() {
    if (this.todo &&!this.todo.complete) {
      this.completeClicked.emit(this.todo.id);
    }
  }
}
