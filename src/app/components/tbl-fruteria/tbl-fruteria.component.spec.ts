import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFruteriaComponent } from './tbl-fruteria.component';

describe('TblFruteriaComponent', () => {
  let component: TblFruteriaComponent;
  let fixture: ComponentFixture<TblFruteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFruteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFruteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
