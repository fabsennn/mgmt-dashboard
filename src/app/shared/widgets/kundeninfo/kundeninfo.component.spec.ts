import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundeninfoComponent } from './kundeninfo.component';

describe('KundeninfoComponent', () => {
  let component: KundeninfoComponent;
  let fixture: ComponentFixture<KundeninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundeninfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundeninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
