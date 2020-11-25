import { TestBed } from '@angular/core/testing';

import { TodoTableService } from './todo-table.service';

describe('TodoTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoTableService = TestBed.get(TodoTableService);
    expect(service).toBeTruthy();
  });
});
