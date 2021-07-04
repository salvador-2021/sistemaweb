import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMuebleriaComponent } from './add-muebleria.component';

describe('AddMuebleriaComponent', () => {
  let component: AddMuebleriaComponent;
  let fixture: ComponentFixture<AddMuebleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMuebleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMuebleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
