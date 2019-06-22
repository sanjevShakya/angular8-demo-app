import { TestBed } from '@angular/core/testing';

import { AmountServiceService } from './amount-service.service';

describe('AmountServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmountServiceService = TestBed.get(AmountServiceService);
    expect(service).toBeTruthy();
  });
});
