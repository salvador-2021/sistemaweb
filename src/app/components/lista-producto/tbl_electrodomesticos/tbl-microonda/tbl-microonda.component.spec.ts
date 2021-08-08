import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblMicroondaComponent } from './tbl-microonda.component';

describe('TblMicroondaComponent', () => {
  let component: TblMicroondaComponent;
  let fixture: ComponentFixture<TblMicroondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblMicroondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblMicroondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
