import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFierroComponent } from './detalle-fierro.component';

describe('DetalleFierroComponent', () => {
  let component: DetalleFierroComponent;
  let fixture: ComponentFixture<DetalleFierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFierroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
