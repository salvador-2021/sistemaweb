import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblConstruccionComponent } from './tbl-construccion.component';

describe('TblConstruccionComponent', () => {
  let component: TblConstruccionComponent;
  let fixture: ComponentFixture<TblConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
