import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblCerrajeriaComponent } from './tbl-cerrajeria.component';

describe('TblCerrajeriaComponent', () => {
  let component: TblCerrajeriaComponent;
  let fixture: ComponentFixture<TblCerrajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblCerrajeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblCerrajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
