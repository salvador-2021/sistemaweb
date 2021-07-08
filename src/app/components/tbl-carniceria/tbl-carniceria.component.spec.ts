import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblCarniceriaComponent } from './tbl-carniceria.component';

describe('TblCarniceriaComponent', () => {
  let component: TblCarniceriaComponent;
  let fixture: ComponentFixture<TblCarniceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblCarniceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblCarniceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
