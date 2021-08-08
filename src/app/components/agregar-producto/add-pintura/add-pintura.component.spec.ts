import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPinturaComponent } from './add-pintura.component';

describe('AddPinturaComponent', () => {
  let component: AddPinturaComponent;
  let fixture: ComponentFixture<AddPinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
