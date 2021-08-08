import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFierroComponent } from './tbl-fierro.component';

describe('TblFierroComponent', () => {
  let component: TblFierroComponent;
  let fixture: ComponentFixture<TblFierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFierroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
