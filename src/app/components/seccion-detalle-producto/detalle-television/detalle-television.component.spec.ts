import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTelevisionComponent } from './detalle-television.component';

describe('DetalleTelevisionComponent', () => {
  let component: DetalleTelevisionComponent;
  let fixture: ComponentFixture<DetalleTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTelevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
