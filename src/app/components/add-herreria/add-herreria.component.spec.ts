import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHerreriaComponent } from './add-herreria.component';

describe('AddHerreriaComponent', () => {
  let component: AddHerreriaComponent;
  let fixture: ComponentFixture<AddHerreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHerreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHerreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
