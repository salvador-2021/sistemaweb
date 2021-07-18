import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTelaComponent } from './detalle-tela.component';

describe('DetalleTelaComponent', () => {
  let component: DetalleTelaComponent;
  let fixture: ComponentFixture<DetalleTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
