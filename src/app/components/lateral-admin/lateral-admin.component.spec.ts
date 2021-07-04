import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralAdminComponent } from './lateral-admin.component';

describe('LateralAdminComponent', () => {
  let component: LateralAdminComponent;
  let fixture: ComponentFixture<LateralAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
