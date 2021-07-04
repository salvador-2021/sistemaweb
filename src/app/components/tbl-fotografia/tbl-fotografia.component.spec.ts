import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFotografiaComponent } from './tbl-fotografia.component';

describe('TblFotografiaComponent', () => {
  let component: TblFotografiaComponent;
  let fixture: ComponentFixture<TblFotografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFotografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
