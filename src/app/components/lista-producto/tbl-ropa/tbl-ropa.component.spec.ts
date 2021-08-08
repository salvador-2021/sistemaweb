import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblRopaComponent } from './tbl-ropa.component';

describe('TblRopaComponent', () => {
  let component: TblRopaComponent;
  let fixture: ComponentFixture<TblRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
