import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblVeladoraComponent } from './tbl-veladora.component';

describe('TblVeladoraComponent', () => {
  let component: TblVeladoraComponent;
  let fixture: ComponentFixture<TblVeladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblVeladoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblVeladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
