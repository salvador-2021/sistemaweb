import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAbarroteComponent } from './detalle-abarrote.component';

describe('DetalleAbarroteComponent', () => {
  let component: DetalleAbarroteComponent;
  let fixture: ComponentFixture<DetalleAbarroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAbarroteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAbarroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
