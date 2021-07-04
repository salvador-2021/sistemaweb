import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblEmpresaComponent } from './tbl-empresa.component';

describe('TblEmpresaComponent', () => {
  let component: TblEmpresaComponent;
  let fixture: ComponentFixture<TblEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
