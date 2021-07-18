import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCelularesComponent } from './detalle-celulares.component';

describe('DetalleCelularesComponent', () => {
  let component: DetalleCelularesComponent;
  let fixture: ComponentFixture<DetalleCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCelularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
