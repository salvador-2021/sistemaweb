import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblConfigMycomponyComponent } from './tbl-config-mycompony.component';

describe('TblConfigMycomponyComponent', () => {
  let component: TblConfigMycomponyComponent;
  let fixture: ComponentFixture<TblConfigMycomponyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblConfigMycomponyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblConfigMycomponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
