import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespraechsTableComponent } from './gespraechs-table.component';

describe('GespraechsTableComponent', () => {
  let component: GespraechsTableComponent;
  let fixture: ComponentFixture<GespraechsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespraechsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespraechsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
