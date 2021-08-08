import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTelevisionComponent } from './add-television.component';

describe('AddTelevisionComponent', () => {
  let component: AddTelevisionComponent;
  let fixture: ComponentFixture<AddTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTelevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
