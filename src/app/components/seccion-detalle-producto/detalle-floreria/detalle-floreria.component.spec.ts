import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFloreriaComponent } from './detalle-floreria.component';

describe('DetalleFloreriaComponent', () => {
  let component: DetalleFloreriaComponent;
  let fixture: ComponentFixture<DetalleFloreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFloreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFloreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
