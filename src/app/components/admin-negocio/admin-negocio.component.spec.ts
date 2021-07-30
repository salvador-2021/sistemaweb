import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNegocioComponent } from './admin-negocio.component';

describe('AdminNegocioComponent', () => {
  let component: AdminNegocioComponent;
  let fixture: ComponentFixture<AdminNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
