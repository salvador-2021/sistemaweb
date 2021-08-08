import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblCarpinteriaComponent } from './tbl-carpinteria.component';

describe('TblCarpinteriaComponent', () => {
  let component: TblCarpinteriaComponent;
  let fixture: ComponentFixture<TblCarpinteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblCarpinteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblCarpinteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
