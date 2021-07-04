import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblMotoComponent } from './tbl-moto.component';

describe('TblMotoComponent', () => {
  let component: TblMotoComponent;
  let fixture: ComponentFixture<TblMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
