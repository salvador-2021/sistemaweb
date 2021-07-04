import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblServicioComponent } from './tbl-servicio.component';

describe('TblServicioComponent', () => {
  let component: TblServicioComponent;
  let fixture: ComponentFixture<TblServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
