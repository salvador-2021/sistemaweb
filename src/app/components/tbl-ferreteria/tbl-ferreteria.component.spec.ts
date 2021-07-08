import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFerreteriaComponent } from './tbl-ferreteria.component';

describe('TblFerreteriaComponent', () => {
  let component: TblFerreteriaComponent;
  let fixture: ComponentFixture<TblFerreteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFerreteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFerreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
