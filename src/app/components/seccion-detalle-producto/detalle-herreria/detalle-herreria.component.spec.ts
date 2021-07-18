import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHerreriaComponent } from './detalle-herreria.component';

describe('DetalleHerreriaComponent', () => {
  let component: DetalleHerreriaComponent;
  let fixture: ComponentFixture<DetalleHerreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHerreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHerreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
