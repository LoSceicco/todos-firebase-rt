import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  public errors: Subject<Error> = new Subject();

  public pushError(error:Error) {
    this.errors.next(error);
  }
}
