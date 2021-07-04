import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPapeleriaComponent } from './add-papeleria.component';

describe('AddPapeleriaComponent', () => {
  let component: AddPapeleriaComponent;
  let fixture: ComponentFixture<AddPapeleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPapeleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
