import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblHivernaderoComponent } from './tbl-hivernadero.component';

describe('TblHivernaderoComponent', () => {
  let component: TblHivernaderoComponent;
  let fixture: ComponentFixture<TblHivernaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblHivernaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblHivernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
