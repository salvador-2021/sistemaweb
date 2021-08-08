import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanchaComponent } from './add-plancha.component';

describe('AddPlanchaComponent', () => {
  let component: AddPlanchaComponent;
  let fixture: ComponentFixture<AddPlanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
