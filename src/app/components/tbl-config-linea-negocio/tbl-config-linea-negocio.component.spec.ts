import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblConfigLineaNegocioComponent } from './tbl-config-linea-negocio.component';

describe('TblConfigLineaNegocioComponent', () => {
  let component: TblConfigLineaNegocioComponent;
  let fixture: ComponentFixture<TblConfigLineaNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblConfigLineaNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblConfigLineaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
