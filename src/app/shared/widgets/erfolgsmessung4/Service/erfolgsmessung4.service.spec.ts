import { TestBed } from '@angular/core/testing';

import { Erfolgsmessung4Service } from './erfolgsmessung4.service';

describe('Erfolgsmessung4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Erfolgsmessung4Service = TestBed.get(Erfolgsmessung4Service);
    expect(service).toBeTruthy();
  });
});
