import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblBodegaComponent } from './tbl-bodega.component';

describe('TblBodegaComponent', () => {
  let component: TblBodegaComponent;
  let fixture: ComponentFixture<TblBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
