import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCerrajeriaComponent } from './add-cerrajeria.component';

describe('AddCerrajeriaComponent', () => {
  let component: AddCerrajeriaComponent;
  let fixture: ComponentFixture<AddCerrajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCerrajeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCerrajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
