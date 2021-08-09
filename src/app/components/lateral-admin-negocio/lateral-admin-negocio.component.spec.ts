import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralAdminNegocioComponent } from './lateral-admin-negocio.component';

describe('LateralAdminComponent', () => {
  let component: LateralAdminNegocioComponent;
  let fixture: ComponentFixture<LateralAdminNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralAdminNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralAdminNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
