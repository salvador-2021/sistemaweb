import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblJoyeriaComponent } from './tbl-joyeria.component';

describe('TblJoyeriaComponent', () => {
  let component: TblJoyeriaComponent;
  let fixture: ComponentFixture<TblJoyeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblJoyeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblJoyeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
