import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMuebleriaComponent } from './detalle-muebleria.component';

describe('DetalleMuebleriaComponent', () => {
  let component: DetalleMuebleriaComponent;
  let fixture: ComponentFixture<DetalleMuebleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMuebleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMuebleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
