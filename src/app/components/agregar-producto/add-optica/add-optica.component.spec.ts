import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpticaComponent } from './add-optica.component';

describe('AddOpticaComponent', () => {
  let component: AddOpticaComponent;
  let fixture: ComponentFixture<AddOpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
