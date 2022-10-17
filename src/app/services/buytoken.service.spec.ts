import { TestBed } from '@angular/core/testing';

import { BuyTokenService } from './buytoken.service';

describe('BuyTokenService', () => {
  let service: BuyTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
