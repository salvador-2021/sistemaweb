import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmaciaComponent } from './add-farmacia.component';

describe('AddFarmaciaComponent', () => {
  let component: AddFarmaciaComponent;
  let fixture: ComponentFixture<AddFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
