import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaRopaComponent } from './busqueda-principal-producto.component';

describe('TiendaRopaComponent', () => {
  let component: TiendaRopaComponent;
  let fixture: ComponentFixture<TiendaRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
