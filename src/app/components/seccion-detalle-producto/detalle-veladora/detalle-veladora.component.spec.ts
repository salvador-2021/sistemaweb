import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVeladoraComponent } from './detalle-veladora.component';

describe('DetalleVeladoraComponent', () => {
  let component: DetalleVeladoraComponent;
  let fixture: ComponentFixture<DetalleVeladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVeladoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVeladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
