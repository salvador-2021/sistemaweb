import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRefrigeradorComponent } from './detalle-refrigerador.component';

describe('DetalleRefrigeradorComponent', () => {
  let component: DetalleRefrigeradorComponent;
  let fixture: ComponentFixture<DetalleRefrigeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRefrigeradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRefrigeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
