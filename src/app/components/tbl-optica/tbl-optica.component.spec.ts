import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblOpticaComponent } from './tbl-optica.component';

describe('TblOpticaComponent', () => {
  let component: TblOpticaComponent;
  let fixture: ComponentFixture<TblOpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblOpticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblOpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
