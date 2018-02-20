import { TestBed, inject } from '@angular/core/testing';

import { AuthenticatedService } from './authenticated.service';

describe('AuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedService]
    });
  });

  it('should be created', inject([AuthenticatedService], (service: AuthenticatedService) => {
    expect(service).toBeTruthy();
  }));
});
