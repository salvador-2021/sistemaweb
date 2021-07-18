import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCerrajeriaComponent } from './detalle-cerrajeria.component';

describe('DetalleCerrajeriaComponent', () => {
  let component: DetalleCerrajeriaComponent;
  let fixture: ComponentFixture<DetalleCerrajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCerrajeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCerrajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
