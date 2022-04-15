export class Todo {
  public id?: string;
  public todo: string;
  public complete: boolean = false;
  constructor(todo:string) {
    this.todo = todo;
  }
}
