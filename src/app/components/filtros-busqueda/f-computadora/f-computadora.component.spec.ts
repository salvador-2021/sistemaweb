import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FComputadoraComponent } from './f-computadora.component';

describe('FComputadoraComponent', () => {
  let component: FComputadoraComponent;
  let fixture: ComponentFixture<FComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FComputadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
