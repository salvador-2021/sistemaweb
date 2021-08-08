import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFloreriaComponent } from './add-floreria.component';

describe('AddFloreriaComponent', () => {
  let component: AddFloreriaComponent;
  let fixture: ComponentFixture<AddFloreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFloreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFloreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
