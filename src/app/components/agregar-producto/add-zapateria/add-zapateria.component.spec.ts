import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZapateriaComponent } from './add-zapateria.component';

describe('AddZapateriaComponent', () => {
  let component: AddZapateriaComponent;
  let fixture: ComponentFixture<AddZapateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZapateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZapateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
