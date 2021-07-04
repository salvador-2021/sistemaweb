import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubheaderComponent } from './nav-subheader.component';

describe('NavSubheaderComponent', () => {
  let component: NavSubheaderComponent;
  let fixture: ComponentFixture<NavSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
