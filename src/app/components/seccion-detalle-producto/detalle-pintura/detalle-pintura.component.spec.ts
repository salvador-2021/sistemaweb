import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePinturaComponent } from './detalle-pintura.component';

describe('DetallePinturaComponent', () => {
  let component: DetallePinturaComponent;
  let fixture: ComponentFixture<DetallePinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
