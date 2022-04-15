import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private errorsService:ErrorsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((err) => {
        this.errorsService.pushError(err);
        throw err;
      })
    );
  }
}
