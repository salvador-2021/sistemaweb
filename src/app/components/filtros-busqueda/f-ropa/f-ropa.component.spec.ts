import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRopaComponent } from './f-ropa.component';

describe('FRopaComponent', () => {
  let component: FRopaComponent;
  let fixture: ComponentFixture<FRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
