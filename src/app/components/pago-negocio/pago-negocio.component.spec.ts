import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoNegocioComponent } from './pago-negocio.component';

describe('PagoNegocioComponent', () => {
  let component: PagoNegocioComponent;
  let fixture: ComponentFixture<PagoNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
