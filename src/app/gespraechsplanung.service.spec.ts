import { TestBed } from '@angular/core/testing';

import { GespraechsplanungService } from './gespraechsplanung.service';

describe('GespraechsplanungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GespraechsplanungService = TestBed.get(GespraechsplanungService);
    expect(service).toBeTruthy();
  });
});
