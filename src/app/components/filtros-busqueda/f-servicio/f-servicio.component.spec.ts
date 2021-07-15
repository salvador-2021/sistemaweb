import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FServicioComponent } from './f-servicio.component';

describe('FServicioComponent', () => {
  let component: FServicioComponent;
  let fixture: ComponentFixture<FServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
