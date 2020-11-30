import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblePotentialComponent } from './bubble-potential.component';

describe('BubblePotentialComponent', () => {
  let component: BubblePotentialComponent;
  let fixture: ComponentFixture<BubblePotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblePotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblePotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
