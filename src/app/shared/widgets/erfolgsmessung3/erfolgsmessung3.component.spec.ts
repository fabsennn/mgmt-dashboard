import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Erfolgsmessung3Component } from './erfolgsmessung3.component';

describe('Erfolgsmessung3Component', () => {
  let component: Erfolgsmessung3Component;
  let fixture: ComponentFixture<Erfolgsmessung3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Erfolgsmessung3Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Erfolgsmessung3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
