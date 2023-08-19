import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListItemComponent } from './trip-list-item.component';

describe('TripListItemComponent', () => {
  let component: TripListItemComponent;
  let fixture: ComponentFixture<TripListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripListItemComponent]
    });
    fixture = TestBed.createComponent(TripListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
