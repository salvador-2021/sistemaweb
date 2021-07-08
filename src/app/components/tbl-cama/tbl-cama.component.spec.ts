import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblCamaComponent } from './tbl-cama.component';

describe('TblCamaComponent', () => {
  let component: TblCamaComponent;
  let fixture: ComponentFixture<TblCamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblCamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
