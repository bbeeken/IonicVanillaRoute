import { TestBed } from '@angular/core/testing';

import { FeaturedDealsService } from './featured-deals.service';

describe('FeaturedDealsService', () => {
  let service: FeaturedDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
