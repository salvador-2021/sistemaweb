import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicuadoraComponent } from './add-licuadora.component';

describe('AddLicuadoraComponent', () => {
  let component: AddLicuadoraComponent;
  let fixture: ComponentFixture<AddLicuadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicuadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicuadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
