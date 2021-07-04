import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblComputadoraComponent } from './tbl-computadora.component';

describe('TblComputadoraComponent', () => {
  let component: TblComputadoraComponent;
  let fixture: ComponentFixture<TblComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblComputadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
