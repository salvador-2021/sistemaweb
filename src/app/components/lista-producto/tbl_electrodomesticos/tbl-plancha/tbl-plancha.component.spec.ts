import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPlanchaComponent } from './tbl-plancha.component';

describe('TblPlanchaComponent', () => {
  let component: TblPlanchaComponent;
  let fixture: ComponentFixture<TblPlanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblPlanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblPlanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
