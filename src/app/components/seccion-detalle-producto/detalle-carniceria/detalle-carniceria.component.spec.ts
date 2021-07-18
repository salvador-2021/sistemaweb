import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarniceriaComponent } from './detalle-carniceria.component';

describe('DetalleCarniceriaComponent', () => {
  let component: DetalleCarniceriaComponent;
  let fixture: ComponentFixture<DetalleCarniceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarniceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarniceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
