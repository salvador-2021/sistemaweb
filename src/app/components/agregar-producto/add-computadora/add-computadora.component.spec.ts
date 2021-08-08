import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComputadoraComponent } from './add-computadora.component';

describe('AddComputadoraComponent', () => {
  let component: AddComputadoraComponent;
  let fixture: ComponentFixture<AddComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComputadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
