import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFerreteriaComponent } from './detalle-ferreteria.component';

describe('DetalleFerreteriaComponent', () => {
  let component: DetalleFerreteriaComponent;
  let fixture: ComponentFixture<DetalleFerreteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFerreteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFerreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
