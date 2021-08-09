import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralAdministradorComponent } from './lateral-administrador.component';

describe('LateralAdministradorComponent', () => {
  let component: LateralAdministradorComponent;
  let fixture: ComponentFixture<LateralAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
