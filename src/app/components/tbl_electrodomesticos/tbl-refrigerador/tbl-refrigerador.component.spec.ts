import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblRefrigeradorComponent } from './tbl-refrigerador.component';

describe('TblRefrigeradorComponent', () => {
  let component: TblRefrigeradorComponent;
  let fixture: ComponentFixture<TblRefrigeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblRefrigeradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblRefrigeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
