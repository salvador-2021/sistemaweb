import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPinturaComponent } from './tbl-pintura.component';

describe('TblPinturaComponent', () => {
  let component: TblPinturaComponent;
  let fixture: ComponentFixture<TblPinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblPinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblPinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
