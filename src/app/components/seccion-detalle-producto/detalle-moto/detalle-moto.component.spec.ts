import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMotoComponent } from './detalle-moto.component';

describe('DetalleMotoComponent', () => {
  let component: DetalleMotoComponent;
  let fixture: ComponentFixture<DetalleMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
