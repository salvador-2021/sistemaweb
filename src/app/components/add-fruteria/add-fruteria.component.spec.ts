import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruteriaComponent } from './add-fruteria.component';

describe('AddFruteriaComponent', () => {
  let component: AddFruteriaComponent;
  let fixture: ComponentFixture<AddFruteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFruteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFruteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
