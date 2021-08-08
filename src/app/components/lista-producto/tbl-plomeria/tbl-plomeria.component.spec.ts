import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPlomeriaComponent } from './tbl-plomeria.component';

describe('TblPlomeriaComponent', () => {
  let component: TblPlomeriaComponent;
  let fixture: ComponentFixture<TblPlomeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblPlomeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblPlomeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
