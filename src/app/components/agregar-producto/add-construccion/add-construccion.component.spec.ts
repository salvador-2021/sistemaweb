import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstruccionComponent } from './add-construccion.component';

describe('AddConstruccionComponent', () => {
  let component: AddConstruccionComponent;
  let fixture: ComponentFixture<AddConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
