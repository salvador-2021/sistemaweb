import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlomeriaComponent } from './detalle-plomeria.component';

describe('DetallePlomeriaComponent', () => {
  let component: DetallePlomeriaComponent;
  let fixture: ComponentFixture<DetallePlomeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlomeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlomeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
