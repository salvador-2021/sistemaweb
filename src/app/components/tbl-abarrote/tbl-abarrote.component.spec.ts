import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblAbarroteComponent } from './tbl-abarrote.component';

describe('TblAbarroteComponent', () => {
  let component: TblAbarroteComponent;
  let fixture: ComponentFixture<TblAbarroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblAbarroteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblAbarroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
