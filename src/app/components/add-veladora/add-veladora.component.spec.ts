import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeladoraComponent } from './add-veladora.component';

describe('AddVeladoraComponent', () => {
  let component: AddVeladoraComponent;
  let fixture: ComponentFixture<AddVeladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeladoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
