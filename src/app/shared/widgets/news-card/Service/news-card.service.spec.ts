import { TestBed } from '@angular/core/testing';

import { NewsCardService } from './news-card.service';

describe('TodoTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsCardService = TestBed.get(NewsCardService);
    expect(service).toBeTruthy();
  });
});
