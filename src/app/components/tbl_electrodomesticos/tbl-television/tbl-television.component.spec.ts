import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblTelevisionComponent } from './tbl-television.component';

describe('TblTelevisionComponent', () => {
  let component: TblTelevisionComponent;
  let fixture: ComponentFixture<TblTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblTelevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
