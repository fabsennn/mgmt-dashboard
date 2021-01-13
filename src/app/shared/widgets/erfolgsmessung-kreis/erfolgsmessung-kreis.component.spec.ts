import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfolgsmessungKreisComponent } from './erfolgsmessung-kreis.component';

describe('ErfolgsmessungKreisComponent', () => {
  let component: ErfolgsmessungKreisComponent;
  let fixture: ComponentFixture<ErfolgsmessungKreisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfolgsmessungKreisComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErfolgsmessungKreisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
