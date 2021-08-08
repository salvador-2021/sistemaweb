import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblLicuadoraComponent } from './tbl-licuadora.component';

describe('TblLicuadoraComponent', () => {
  let component: TblLicuadoraComponent;
  let fixture: ComponentFixture<TblLicuadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblLicuadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblLicuadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
