import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFunerariaComponent } from './detalle-funeraria.component';

describe('DetalleFunerariaComponent', () => {
  let component: DetalleFunerariaComponent;
  let fixture: ComponentFixture<DetalleFunerariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFunerariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFunerariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
