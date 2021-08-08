import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblMuebleriaComponent } from './tbl-muebleria.component';

describe('TblMuebleriaComponent', () => {
  let component: TblMuebleriaComponent;
  let fixture: ComponentFixture<TblMuebleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblMuebleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblMuebleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
