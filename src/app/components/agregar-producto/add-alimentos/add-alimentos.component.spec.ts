import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentosComponent } from './add-alimentos.component';

describe('AddAlimentosComponent', () => {
  let component: AddAlimentosComponent;
  let fixture: ComponentFixture<AddAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
