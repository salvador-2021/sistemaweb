import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCelularComponent } from './add-celular.component';

describe('AddCelularComponent', () => {
  let component: AddCelularComponent;
  let fixture: ComponentFixture<AddCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
