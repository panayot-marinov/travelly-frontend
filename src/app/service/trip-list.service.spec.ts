import { TestBed } from '@angular/core/testing';

import { TripService } from './trip-list.service';

describe('TripListService', () => {
  let service: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
