import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarniceriaComponent } from './add-carniceria.component';

describe('AddCarniceriaComponent', () => {
  let component: AddCarniceriaComponent;
  let fixture: ComponentFixture<AddCarniceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarniceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarniceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
