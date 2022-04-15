import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorsService } from 'src/app/services/errors.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit, OnDestroy {

  constructor(
    private errorService:ErrorsService,
  ) { }

  private subscription?:Subscription;

  ngOnInit(): void {
    this.subscription = this.errorService.errors.subscribe((err) => {
      this.errorMessage = err.message;
      this.showError = true;
    })
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  public errorMessage: string = '';
  public showError: boolean = false;

  dismissError() {
    this.showError = false;
  }
}
