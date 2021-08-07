import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarNegocioComponent } from './buscar-negocio.component';

describe('BuscarNegocioComponent', () => {
  let component: BuscarNegocioComponent;
  let fixture: ComponentFixture<BuscarNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
