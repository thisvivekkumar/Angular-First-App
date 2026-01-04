import { TestBed } from '@angular/core/testing';

import { ServicesProgrammingService } from './services-programming-component';

describe('ServicesProgrammingService', () => {
  let service: ServicesProgrammingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesProgrammingService]
    });
    service = TestBed.inject(ServicesProgrammingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
