import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFarmaciaComponent } from './detalle-farmacia.component';

describe('DetalleFarmaciaComponent', () => {
  let component: DetalleFarmaciaComponent;
  let fixture: ComponentFixture<DetalleFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
