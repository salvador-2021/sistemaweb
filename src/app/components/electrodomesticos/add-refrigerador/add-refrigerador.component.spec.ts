import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefrigeradorComponent } from './add-refrigerador.component';

describe('AddRefrigeradorComponent', () => {
  let component: AddRefrigeradorComponent;
  let fixture: ComponentFixture<AddRefrigeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefrigeradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefrigeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
