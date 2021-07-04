import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopaComponent } from './add-ropa.component';

describe('AddRopaComponent', () => {
  let component: AddRopaComponent;
  let fixture: ComponentFixture<AddRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
