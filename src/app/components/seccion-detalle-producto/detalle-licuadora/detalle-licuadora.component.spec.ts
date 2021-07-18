import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLicuadoraComponent } from './detalle-licuadora.component';

describe('DetalleLicuadoraComponent', () => {
  let component: DetalleLicuadoraComponent;
  let fixture: ComponentFixture<DetalleLicuadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLicuadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLicuadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
