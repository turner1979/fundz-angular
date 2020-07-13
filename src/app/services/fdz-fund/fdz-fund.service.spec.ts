import { TestBed } from '@angular/core/testing';

import { FdzFundService } from './fdz-fund.service';

describe('FdzFundService', () => {
  let service: FdzFundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdzFundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
