import { TestBed } from '@angular/core/testing';

import { Erfolgsmessung3Service } from './erfolgsmessung3.service';

describe('Erfolgsmessung3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Erfolgsmessung3Service = TestBed.get(Erfolgsmessung3Service);
    expect(service).toBeTruthy();
  });
});
