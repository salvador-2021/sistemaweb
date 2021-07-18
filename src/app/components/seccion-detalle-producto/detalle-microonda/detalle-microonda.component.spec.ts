import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMicroondaComponent } from './detalle-microonda.component';

describe('DetalleMicroondaComponent', () => {
  let component: DetalleMicroondaComponent;
  let fixture: ComponentFixture<DetalleMicroondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMicroondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMicroondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
