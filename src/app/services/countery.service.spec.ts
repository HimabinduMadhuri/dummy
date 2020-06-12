import { TestBed } from '@angular/core/testing';

import { CounteryService } from './countery.service';

describe('CounteryService', () => {
  let service: CounteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
