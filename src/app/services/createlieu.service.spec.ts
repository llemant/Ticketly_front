import { TestBed } from '@angular/core/testing';

import { CreatelieuService } from './createlieu.service';

describe('CreatelieuService', () => {
  let service: CreatelieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatelieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
