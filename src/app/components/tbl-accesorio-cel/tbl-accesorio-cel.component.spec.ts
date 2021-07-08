import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblAccesorioCelComponent } from './tbl-accesorio-cel.component';

describe('TblAccesorioCelComponent', () => {
  let component: TblAccesorioCelComponent;
  let fixture: ComponentFixture<TblAccesorioCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblAccesorioCelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblAccesorioCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
