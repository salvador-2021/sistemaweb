import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblCelularComponent } from './tbl-celular.component';

describe('TblCelularComponent', () => {
  let component: TblCelularComponent;
  let fixture: ComponentFixture<TblCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
