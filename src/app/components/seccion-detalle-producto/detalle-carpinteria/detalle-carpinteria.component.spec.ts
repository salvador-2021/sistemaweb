import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarpinteriaComponent } from './detalle-carpinteria.component';

describe('DetalleCarpinteriaComponent', () => {
  let component: DetalleCarpinteriaComponent;
  let fixture: ComponentFixture<DetalleCarpinteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarpinteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarpinteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
