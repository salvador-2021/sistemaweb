import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblFunerariaComponent } from './tbl-funeraria.component';

describe('TblFunerariaComponent', () => {
  let component: TblFunerariaComponent;
  let fixture: ComponentFixture<TblFunerariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblFunerariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblFunerariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
