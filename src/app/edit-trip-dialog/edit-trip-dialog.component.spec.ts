import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripDialogComponent } from './edit-trip-dialog.component';

describe('EditTripDialogComponent', () => {
  let component: EditTripDialogComponent;
  let fixture: ComponentFixture<EditTripDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTripDialogComponent]
    });
    fixture = TestBed.createComponent(EditTripDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
