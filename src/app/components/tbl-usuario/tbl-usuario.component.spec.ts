import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblUsuarioComponent } from './tbl-usuario.component';

describe('TblUsuarioComponent', () => {
  let component: TblUsuarioComponent;
  let fixture: ComponentFixture<TblUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
