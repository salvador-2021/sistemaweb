import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRelojeriaComponent } from './detalle-relojeria.component';

describe('DetalleRelojeriaComponent', () => {
  let component: DetalleRelojeriaComponent;
  let fixture: ComponentFixture<DetalleRelojeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRelojeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRelojeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
