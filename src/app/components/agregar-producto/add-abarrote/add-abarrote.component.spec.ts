import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbarroteComponent } from './add-abarrote.component';

describe('AddAbarroteComponent', () => {
  let component: AddAbarroteComponent;
  let fixture: ComponentFixture<AddAbarroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbarroteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbarroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
