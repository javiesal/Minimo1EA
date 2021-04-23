import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivoRegisterComponent } from './colectivo-register.component';

describe('ResClinicoRegisterComponent', () => {
  let component: ColectivoRegisterComponent;
  let fixture: ComponentFixture<ColectivoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectivoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectivoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
