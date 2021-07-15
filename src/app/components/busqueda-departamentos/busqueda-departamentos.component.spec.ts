import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPrincipalProductoComponent } from './busqueda-principal-producto.component';

describe('BusquedadDepartamentosComponent', () => {
  let component: BusquedaPrincipalProductoComponent;
  let fixture: ComponentFixture<BusquedaPrincipalProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPrincipalProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPrincipalProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
