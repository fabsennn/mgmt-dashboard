import { TestBed } from '@angular/core/testing';

import { BubblePotentialService } from './bubble-potential.service';

describe('BubblePotentialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BubblePotentialService = TestBed.get(BubblePotentialService);
    expect(service).toBeTruthy();
  });
});
