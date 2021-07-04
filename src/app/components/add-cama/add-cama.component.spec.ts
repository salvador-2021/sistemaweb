import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCamaComponent } from './add-cama.component';

describe('AddCamaComponent', () => {
  let component: AddCamaComponent;
  let fixture: ComponentFixture<AddCamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
