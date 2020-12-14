import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfolgsmessungComponent } from './erfolgsmessung.component';

describe('ErfolgsmessungComponent', () => {
  let component: ErfolgsmessungComponent;
  let fixture: ComponentFixture<ErfolgsmessungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfolgsmessungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErfolgsmessungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
