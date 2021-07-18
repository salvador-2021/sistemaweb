import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlanchaComponent } from './detalle-plancha.component';

describe('DetallePlanchaComponent', () => {
  let component: DetallePlanchaComponent;
  let fixture: ComponentFixture<DetallePlanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
