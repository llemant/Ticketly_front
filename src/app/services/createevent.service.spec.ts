import { TestBed } from '@angular/core/testing';

import { CreateeventService } from './createevent.service';

describe('CreateeventService', () => {
  let service: CreateeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
