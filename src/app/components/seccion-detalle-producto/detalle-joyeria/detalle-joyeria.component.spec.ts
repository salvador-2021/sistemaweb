import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJoyeriaComponent } from './detalle-joyeria.component';

describe('DetalleJoyeriaComponent', () => {
  let component: DetalleJoyeriaComponent;
  let fixture: ComponentFixture<DetalleJoyeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleJoyeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJoyeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
