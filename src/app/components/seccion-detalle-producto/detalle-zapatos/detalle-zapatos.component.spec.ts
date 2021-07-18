import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleZapatosComponent } from './detalle-zapatos.component';

describe('DetalleZapatosComponent', () => {
  let component: DetalleZapatosComponent;
  let fixture: ComponentFixture<DetalleZapatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleZapatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
