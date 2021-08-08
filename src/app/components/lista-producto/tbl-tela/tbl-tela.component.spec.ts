import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblTelaComponent } from './tbl-tela.component';

describe('TblTelaComponent', () => {
  let component: TblTelaComponent;
  let fixture: ComponentFixture<TblTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblTelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
