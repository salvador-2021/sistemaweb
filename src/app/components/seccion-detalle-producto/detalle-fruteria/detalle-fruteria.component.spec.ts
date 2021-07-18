import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFruteriaComponent } from './detalle-fruteria.component';

describe('DetalleFruteriaComponent', () => {
  let component: DetalleFruteriaComponent;
  let fixture: ComponentFixture<DetalleFruteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFruteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFruteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
