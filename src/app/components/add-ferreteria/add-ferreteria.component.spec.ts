import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFerreteriaComponent } from './add-ferreteria.component';

describe('AddFerreteriaComponent', () => {
  let component: AddFerreteriaComponent;
  let fixture: ComponentFixture<AddFerreteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFerreteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFerreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
