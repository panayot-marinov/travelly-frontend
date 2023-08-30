import { TestBed } from '@angular/core/testing';

import { EditTripDialogService } from './edit-trip-dialog.service';

describe('EditTripDialogService', () => {
  let service: EditTripDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTripDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
