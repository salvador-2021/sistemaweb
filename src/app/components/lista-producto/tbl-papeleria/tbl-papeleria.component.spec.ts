import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPapeleriaComponent } from './tbl-papeleria.component';

describe('TblPapeleriaComponent', () => {
  let component: TblPapeleriaComponent;
  let fixture: ComponentFixture<TblPapeleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblPapeleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblPapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
