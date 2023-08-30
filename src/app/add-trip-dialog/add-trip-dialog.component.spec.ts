import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripDialogComponent } from './add-trip-dialog.component';

describe('AddTripDialogComponent', () => {
  let component: AddTripDialogComponent;
  let fixture: ComponentFixture<AddTripDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTripDialogComponent]
    });
    fixture = TestBed.createComponent(AddTripDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
