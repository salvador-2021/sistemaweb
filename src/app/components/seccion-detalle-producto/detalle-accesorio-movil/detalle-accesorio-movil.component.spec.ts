import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAccesorioMovilComponent } from './detalle-accesorio-movil.component';

describe('DetalleAccesorioMovilComponent', () => {
  let component: DetalleAccesorioMovilComponent;
  let fixture: ComponentFixture<DetalleAccesorioMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAccesorioMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAccesorioMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
