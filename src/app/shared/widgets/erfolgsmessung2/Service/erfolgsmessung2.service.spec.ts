import { TestBed } from '@angular/core/testing';

import { Erfolgsmessung2Service } from './erfolgsmessung2.service';

describe('Erfolgsmessung2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Erfolgsmessung2Service = TestBed.get(Erfolgsmessung2Service);
    expect(service).toBeTruthy();
  });
});
