import { TestBed } from '@angular/core/testing';

import { ErfolgsmessungKreisService } from './erfolgsmessung-kreis.service';

describe('ErfolgsmessungKreisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErfolgsmessungKreisService = TestBed.get(ErfolgsmessungKreisService);
    expect(service).toBeTruthy();
  });
});
