import { TestBed } from '@angular/core/testing';

import { AddItemDialogService } from './add-item-dialog.service';

describe('AddItemDialogService', () => {
  let service: AddItemDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddItemDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
