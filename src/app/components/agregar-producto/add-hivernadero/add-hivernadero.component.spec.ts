import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHivernaderoComponent } from './add-hivernadero.component';

describe('AddHivernaderoComponent', () => {
  let component: AddHivernaderoComponent;
  let fixture: ComponentFixture<AddHivernaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHivernaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHivernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
