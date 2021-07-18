import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlimentoComponent } from './detalle-alimento.component';

describe('DetalleAlimentoComponent', () => {
  let component: DetalleAlimentoComponent;
  let fixture: ComponentFixture<DetalleAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAlimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
