import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfigLineaNegocioComponent } from './add-config-linea-negocio.component';

describe('AddConfigLineaNegocioComponent', () => {
  let component: AddConfigLineaNegocioComponent;
  let fixture: ComponentFixture<AddConfigLineaNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfigLineaNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfigLineaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
