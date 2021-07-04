import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunerariaComponent } from './add-funeraria.component';

describe('AddFunerariaComponent', () => {
  let component: AddFunerariaComponent;
  let fixture: ComponentFixture<AddFunerariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFunerariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFunerariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
