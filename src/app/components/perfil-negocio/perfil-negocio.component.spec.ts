import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNegocioComponent } from './perfil-negocio.component';

describe('PerfilNegocioComponent', () => {
  let component: PerfilNegocioComponent;
  let fixture: ComponentFixture<PerfilNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
