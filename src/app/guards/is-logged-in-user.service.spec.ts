import { TestBed } from '@angular/core/testing';

import { IsLoggedInUserService } from './is-logged-in-user.service';

describe('IsLoggedInUserService', () => {
  let service: IsLoggedInUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedInUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
