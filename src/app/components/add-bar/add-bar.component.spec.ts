import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarComponent } from './add-bar.component';

describe('AddBarComponent', () => {
  let component: AddBarComponent;
  let fixture: ComponentFixture<AddBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
