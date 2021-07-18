import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOpticaComponent } from './detalle-optica.component';

describe('DetalleOpticaComponent', () => {
  let component: DetalleOpticaComponent;
  let fixture: ComponentFixture<DetalleOpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOpticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
