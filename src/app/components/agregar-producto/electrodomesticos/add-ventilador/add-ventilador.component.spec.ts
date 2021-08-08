import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVentiladorComponent } from './add-ventilador.component';

describe('AddVentiladorComponent', () => {
  let component: AddVentiladorComponent;
  let fixture: ComponentFixture<AddVentiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVentiladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVentiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
