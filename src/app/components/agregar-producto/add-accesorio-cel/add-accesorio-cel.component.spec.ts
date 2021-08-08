import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccesorioCelComponent } from './add-accesorio-cel.component';

describe('AddAccesorioCelComponent', () => {
  let component: AddAccesorioCelComponent;
  let fixture: ComponentFixture<AddAccesorioCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccesorioCelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccesorioCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
