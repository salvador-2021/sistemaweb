import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFarmaciaComponent } from './tbl-farmacia.component';

describe('TblFarmaciaComponent', () => {
  let component: TblFarmaciaComponent;
  let fixture: ComponentFixture<TblFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
