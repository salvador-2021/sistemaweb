import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBodegaComponent } from './add-bodega.component';

describe('AddBodegaComponent', () => {
  let component: AddBodegaComponent;
  let fixture: ComponentFixture<AddBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
