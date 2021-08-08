import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblBicicletaComponent } from './tbl-bicicleta.component';

describe('TblBicicletaComponent', () => {
  let component: TblBicicletaComponent;
  let fixture: ComponentFixture<TblBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblBicicletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
