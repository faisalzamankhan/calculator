import { TestBed } from '@angular/core/testing';

import { PiserviceService } from './piservice.service';

describe('PiserviceService', () => {
  let service: PiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
