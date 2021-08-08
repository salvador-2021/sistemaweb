import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoyeriaComponent } from './add-joyeria.component';

describe('AddJoyeriaComponent', () => {
  let component: AddJoyeriaComponent;
  let fixture: ComponentFixture<AddJoyeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJoyeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoyeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
