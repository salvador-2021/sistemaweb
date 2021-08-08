import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBicicletaComponent } from './add-bicicleta.component';

describe('AddBicicletaComponent', () => {
  let component: AddBicicletaComponent;
  let fixture: ComponentFixture<AddBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBicicletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
