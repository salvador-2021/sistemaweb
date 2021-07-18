import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePapeleriaComponent } from './detalle-papeleria.component';

describe('DetallePapeleriaComponent', () => {
  let component: DetallePapeleriaComponent;
  let fixture: ComponentFixture<DetallePapeleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePapeleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
