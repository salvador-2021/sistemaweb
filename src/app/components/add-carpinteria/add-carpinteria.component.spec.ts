import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarpinteriaComponent } from './add-carpinteria.component';

describe('AddCarpinteriaComponent', () => {
  let component: AddCarpinteriaComponent;
  let fixture: ComponentFixture<AddCarpinteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarpinteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarpinteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
