import { TestBed } from '@angular/core/testing';

import { KundeninfoService } from './kundeninfo.service';

describe('KundeninfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KundeninfoService = TestBed.get(KundeninfoService);
    expect(service).toBeTruthy();
  });
});
