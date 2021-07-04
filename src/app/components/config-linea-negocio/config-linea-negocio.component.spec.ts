import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLineaNegocioComponent } from './config-linea-negocio.component';

describe('ConfigLineaNegocioComponent', () => {
  let component: ConfigLineaNegocioComponent;
  let fixture: ComponentFixture<ConfigLineaNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLineaNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLineaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
