import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  public isLoading:boolean = false;
  public startLoading() {
    this.isLoading = true;
  }
  public stopLoading() {
    this.isLoading = false;
  }
}
