import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHivernaderoComponent } from './detalle-hivernadero.component';

describe('DetalleHivernaderoComponent', () => {
  let component: DetalleHivernaderoComponent;
  let fixture: ComponentFixture<DetalleHivernaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHivernaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHivernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
