import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblAlimentoComponent } from './tbl-alimento.component';

describe('TblAlimentoComponent', () => {
  let component: TblAlimentoComponent;
  let fixture: ComponentFixture<TblAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblAlimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
