import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelojeriaComponent } from './add-relojeria.component';

describe('AddRelojeriaComponent', () => {
  let component: AddRelojeriaComponent;
  let fixture: ComponentFixture<AddRelojeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRelojeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRelojeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
