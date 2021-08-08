import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblRelojeriaComponent } from './tbl-relojeria.component';

describe('TblRelojeriaComponent', () => {
  let component: TblRelojeriaComponent;
  let fixture: ComponentFixture<TblRelojeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblRelojeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblRelojeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
