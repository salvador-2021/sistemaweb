import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDentistaComponent } from './detalle-dentista.component';

describe('DetalleDentistaComponent', () => {
  let component: DetalleDentistaComponent;
  let fixture: ComponentFixture<DetalleDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
