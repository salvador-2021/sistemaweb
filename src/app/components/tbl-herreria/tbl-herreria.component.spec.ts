import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblHerreriaComponent } from './tbl-herreria.component';

describe('TblHerreriaComponent', () => {
  let component: TblHerreriaComponent;
  let fixture: ComponentFixture<TblHerreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblHerreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblHerreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
