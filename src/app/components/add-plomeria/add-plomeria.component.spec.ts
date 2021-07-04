import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlomeriaComponent } from './add-plomeria.component';

describe('AddPlomeriaComponent', () => {
  let component: AddPlomeriaComponent;
  let fixture: ComponentFixture<AddPlomeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlomeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlomeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
