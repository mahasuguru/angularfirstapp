import { TestBed } from '@angular/core/testing';

import { UtilityservicesService } from './utilityservices.service';

describe('UtilityservicesService', () => {
  let service: UtilityservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
