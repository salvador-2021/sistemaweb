import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAbarroteComponent } from './f-abarrote.component';

describe('FAbarroteComponent', () => {
  let component: FAbarroteComponent;
  let fixture: ComponentFixture<FAbarroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAbarroteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAbarroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
