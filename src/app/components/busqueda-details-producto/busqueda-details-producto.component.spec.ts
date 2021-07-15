import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDetailsProductoComponent } from './busqueda-details-producto.component';

describe('DetailsProductComponent', () => {
  let component: BusquedaDetailsProductoComponent;
  let fixture: ComponentFixture<BusquedaDetailsProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaDetailsProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaDetailsProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
