import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFotografiaComponent } from './add-fotografia.component';

describe('AddFotografiaComponent', () => {
  let component: AddFotografiaComponent;
  let fixture: ComponentFixture<AddFotografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFotografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
