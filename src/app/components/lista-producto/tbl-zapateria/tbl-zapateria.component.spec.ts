import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblZapateriaComponent } from './tbl-zapateria.component';

describe('TblZapateriaComponent', () => {
  let component: TblZapateriaComponent;
  let fixture: ComponentFixture<TblZapateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblZapateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblZapateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
