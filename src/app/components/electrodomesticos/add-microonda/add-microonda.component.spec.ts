import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMicroondaComponent } from './add-microonda.component';

describe('AddMicroondaComponent', () => {
  let component: AddMicroondaComponent;
  let fixture: ComponentFixture<AddMicroondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMicroondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMicroondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
