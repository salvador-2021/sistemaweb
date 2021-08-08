import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblVentiladorComponent } from './tbl-ventilador.component';

describe('TblVentiladorComponent', () => {
  let component: TblVentiladorComponent;
  let fixture: ComponentFixture<TblVentiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblVentiladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblVentiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
