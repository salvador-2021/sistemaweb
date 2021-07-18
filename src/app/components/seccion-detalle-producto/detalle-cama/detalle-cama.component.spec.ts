import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCamaComponent } from './detalle-cama.component';

describe('DetalleCamaComponent', () => {
  let component: DetalleCamaComponent;
  let fixture: ComponentFixture<DetalleCamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
