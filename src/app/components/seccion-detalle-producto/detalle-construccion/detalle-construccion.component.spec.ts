import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConstruccionComponent } from './detalle-construccion.component';

describe('DetalleConstruccionComponent', () => {
  let component: DetalleConstruccionComponent;
  let fixture: ComponentFixture<DetalleConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
