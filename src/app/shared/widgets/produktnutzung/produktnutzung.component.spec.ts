import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktnutzungComponent } from './produktnutzung.component';
describe('ProduktnutzungComponent', () => {
  let component: ProduktnutzungComponent;
  let fixture: ComponentFixture<ProduktnutzungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktnutzungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktnutzungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
