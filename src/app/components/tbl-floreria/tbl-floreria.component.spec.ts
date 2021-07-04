import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFloreriaComponent } from './tbl-floreria.component';

describe('TblFloreriaComponent', () => {
  let component: TblFloreriaComponent;
  let fixture: ComponentFixture<TblFloreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFloreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFloreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
