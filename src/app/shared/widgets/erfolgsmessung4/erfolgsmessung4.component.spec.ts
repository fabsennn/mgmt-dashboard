import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Erfolgsmessung4Component } from './erfolgsmessung4.component';

describe('Erfolgsmessung4Component', () => {
  let component: Erfolgsmessung4Component;
  let fixture: ComponentFixture<Erfolgsmessung4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Erfolgsmessung4Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Erfolgsmessung4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
