import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRopasComponent } from './detalle-ropas.component';

describe('DetalleRopasComponent', () => {
  let component: DetalleRopasComponent;
  let fixture: ComponentFixture<DetalleRopasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRopasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
