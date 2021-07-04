import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfigMycomponyComponent } from './add-config-mycompony.component';

describe('AddConfigMycomponyComponent', () => {
  let component: AddConfigMycomponyComponent;
  let fixture: ComponentFixture<AddConfigMycomponyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfigMycomponyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfigMycomponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
