import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFierroComponent } from './add-fierro.component';

describe('AddFierroComponent', () => {
  let component: AddFierroComponent;
  let fixture: ComponentFixture<AddFierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFierroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
