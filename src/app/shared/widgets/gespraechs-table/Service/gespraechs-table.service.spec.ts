import { TestBed } from '@angular/core/testing';

import { GespraechsTableService } from './gespraechs-table.service';

describe('GespraechsTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GespraechsTableService = TestBed.get(GespraechsTableService);
    expect(service).toBeTruthy();
  });
});
