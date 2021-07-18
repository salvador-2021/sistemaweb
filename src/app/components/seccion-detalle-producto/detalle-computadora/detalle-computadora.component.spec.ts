import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComputadoraComponent } from './detalle-computadora.component';

describe('DetalleComputadoraComponent', () => {
  let component: DetalleComputadoraComponent;
  let fixture: ComponentFixture<DetalleComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComputadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
