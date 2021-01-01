import { TestBed } from '@angular/core/testing';

import { ProduktNutzungService } from './produktnutzung.service';

describe('ProduktNutzungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduktNutzungService = TestBed.get(ProduktNutzungService);
    expect(service).toBeTruthy();
  });
});
