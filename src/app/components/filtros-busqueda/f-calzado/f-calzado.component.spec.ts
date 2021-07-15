import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCalzadoComponent } from './f-calzado.component';

describe('FCalzadoComponent', () => {
  let component: FCalzadoComponent;
  let fixture: ComponentFixture<FCalzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCalzadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCalzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
