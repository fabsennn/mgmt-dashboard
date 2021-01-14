import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Erfolgsmessung2Component } from './erfolgsmessung2.component';

describe('Erfolgsmessung2Component', () => {
  let component: Erfolgsmessung2Component;
  let fixture: ComponentFixture<Erfolgsmessung2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Erfolgsmessung2Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Erfolgsmessung2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
