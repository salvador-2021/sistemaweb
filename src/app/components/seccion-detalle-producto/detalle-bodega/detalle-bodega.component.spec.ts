import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBodegaComponent } from './detalle-bodega.component';

describe('DetalleBodegaComponent', () => {
  let component: DetalleBodegaComponent;
  let fixture: ComponentFixture<DetalleBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
