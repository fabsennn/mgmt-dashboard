import { TestBed } from '@angular/core/testing';

import { ErfolgsmessungService } from './erfolgsmessung.service';
describe('ErfolgsmessungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErfolgsmessungService = TestBed.get(ErfolgsmessungService);
    expect(service).toBeTruthy();
  });
});
